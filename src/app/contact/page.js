"use client"

import { useContext, useState } from "react"
import { NaokContext } from "@/providers/NaokProvider"
import { usePathname } from "next/navigation"

import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import Nav from "@/components/nav"
import Footer from "@/components/footer"

import Loading from "@/svg/loading"
import Spinner from "@/svg/spinner"

import vars from '@/styles/vars.module.scss'

const noakSchema = yup.object().shape({
    name: yup.string().min(2).required('name is required'),
    email: yup.string().email().required('email is required'),
    message: yup.string().min(2).required('leave a message')
})

// hello@naokwrite.com

const Contact = () => {
    const [naok] = useContext(NaokContext)
    const path = usePathname()
    const [submitting, setSubmitting] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    return (
        <main className="contact-container">
            {naok.contactLoaded && <Nav />}

            {naok.contactInfo.length > 0 && (
                <div 
                    className="contact-info" 
                    dangerouslySetInnerHTML={{__html: naok.contactInfo}}
                />
            )}

            {naok.contactLoaded && (
                <>

                <div className="contact-line"></div>

                <p>To get in touch, write me an email directly at <a href="mailto:hello@naokwrite.com">hello@naokwrite.com</a>, or use the contact form below.</p>

                <div className="contact-line"></div>

                <div className="contact-form">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: ''
                        }}
                        validationSchema={noakSchema}
                        onSubmit={(values, {resetForm}) => {
                            setSubmitting(true)
                            resetForm()
                            setSuccessMsg('')
                            setErrorMsg('')

                            axios.defaults.headers.post['Content-Type'] = 'application/json'
                            axios.post('https://formsubmit.co/ajax/hello@naokwrite.com', values)
                                .then(response => {
                                    console.log(response)
                                    setSuccessMsg('we have recieved your email and will get back to you shortly.')
                                    setSubmitting(false)
                                })
                                .catch(error => {
                                    console.log(error)
                                    setErrorMsg('There was a problem sending the message, try again later or email directly')
                                    setSubmitting(false)
                                })
                        }}
                    >
                        {({ errors, touched, dirty }) => {
                            return (
                                <Form>
                                    <div className="contact-input">
                                        <label className="form-label" htmlFor="name">name</label>
                                        <Field
                                            component="input" 
                                            name="name"
                                            style={{ 
                                                borderBottomColor: errors.name ? vars.error : vars.brand 
                                            }}
                                        />
                                    </div>
                                    <div className="contact-input">
                                        <label className="form-label" htmlFor="email">email</label>
                                        <Field
                                            component="input"
                                            name="email"
                                            style={{
                                                borderBottomColor: errors.email ? vars.error : vars.brand
                                            }}
                                        />
                                    </div>
                
                                    <div className="contact-input">
                                        <label className="form-label" htmlFor="message">message</label>
                                        <Field 
                                            component="textarea"
                                            name="message" 
                                            rows={5}
                                            style={{ 
                                                borderBottomColor: errors.message ? vars.error : vars.brand 
                                            }}    
                                        />
                                    </div>
                                    <button className="contact-submit" type="submit">{submitting ? <Spinner /> : 'submit'}</button>
                                    {!dirty && errorMsg.length > 0 && <p className="contact-error">{errorMsg}</p>}
                                    {!dirty && successMsg.length > 0 && <p className="contact-success">{successMsg}</p>}
                                </Form>
                            )
                        }}
                    </Formik>
                </div>

                <div className="contact-line"></div>

                <h2>Exhibitions:</h2>

            </>
            )}   

            {naok.contactExhibitions.length > 0 && (
                <div 
                    className="contact-exhibitions" 
                    dangerouslySetInnerHTML={{__html: naok.contactExhibitions}}
                />
            )}

            {naok.errorMsg.length > 0 && (
                <div className="error-message">
                    <p>{naok.errorMsg}</p>
                </div>
            )} 

            {!naok.contactLoaded && (
                <div className="loading-container">
                    <Loading color="black"/>
                    <p
                        style={{ color: path === '/' ? 'white' : "black" }}
                    >loading...</p>
                </div>
            )}
            <Footer />
        </main>
    )
}

export default Contact