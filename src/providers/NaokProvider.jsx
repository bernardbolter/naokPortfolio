"use client"

import React, { useState, useEffect, createContext } from 'react'
import { shuffle } from '@/helpers'
// import artwork from '../data/artworks.json'

export const NaokContext = createContext()

const NaokProvider = ({ children }) => {

    const [naok, setNaok] = useState({
        slugs: ['home', 'avant-letters', 'realism', 'murals', 'calligraphy', 'videos'],
        artworks: [],
        avantletters: [],
        realism: [],
        murals: [],
        calligraphy: [],
        videos: [],
        dataLoaded: false,
        errorMsg: '',
        contact: {},
        contactInfo: [],
        contactLoaded: false
    })

    const siteURL = 'https://makearte.de/wp-json/wp/v2/naokwrite?acf_format=standard&per_page=100'
    const contactInfoURL = 'https://makearte.de/wp-json/wp/v2/pages/?slug=naokwrite-contact'

    // get contact info
    useEffect(() => {
      if (naok.contactInfo.length !== 0) {
        setNaok(state => ({ ...state, contactLoaded: true }))
      } else {
        loadcontact()
      }

      async function loadcontact() {
        const response = await fetch(contactInfoURL)
        if (!response.ok) {
          setNaok(state => ({ 
            ...state, 
            errorMsg: 'Website not loading at the moment, please try again later',
            contactLoaded: true
          }))
          return
        }
        const contactData = await response.json()
        console.log(contactData)
        setNaok(state => ({ 
          ...state,
          contactLoaded: true,
          contact: contactData[0]
        }))
      }
    }, [])

    // get data
    useEffect(() => {
        if (naok.artworks.length !== 0) {
            setNaok(state => ({ ...state, dataLoaded: true }))
        } else {
            loadart()
        }

        async function loadart() {
            const response = await fetch(siteURL)
            if (!response.ok) {
                setNaok(state => ({ 
                  ...state, 
                  errorMsg: 'Website not loading at the moment, please try again later',
                  dataLoaded: true
                }))
                return
            }
            const artworkData = await response.json()
            // console.log(artworkData)
            sortArtwork(artworkData)
            setNaok(state => ({ ...state, artworks: artworkData, dataLoaded: true }))
        }
    }, [])

    const sortArtwork = artworks => {
       // Sorting the array by category

        const groupedByCategory = artworks.reduce((result, obj) => {
            // If the category doesn't exist in the result object, create an empty array for it
            if (!result[obj.acf.category]) {
              result[obj.acf.category] = [];
            }
            
            // Push the object to the corresponding category array
            result[obj.acf.category].push({
                'title' : obj.title.rendered,
                'date' : obj.acf.date,
                'details' : obj.acf.details,
                'category' : obj.acf.category,
                'photo' : obj.acf.photo,
                'video' : obj.acf.video,
                'video_link' : obj.acf.video_link,
                'group' : obj.acf.group
            });
            
            return result;
          }, {});

        Object.keys(groupedByCategory).forEach(key => {
          const currentArray = groupedByCategory[key];
          const groupedObject = {};
          groupedObject['empty'] = [];
      
          // Iterate through the array and group items by the 'group' field
          currentArray.forEach(item => {
            const groupValue = item.group || 'empty'; // Use empty string if 'group' is undefined
            if (!groupedObject[groupValue]) {
              groupedObject[groupValue] = [];
            }
            groupedObject[groupValue].push(item);
          });

          var shuffledArray = shuffle(groupedObject['empty'])
          var otherArrays = []

          Object.keys(groupedObject).map(group => {
            if (group !== 'empty') {
                otherArrays.push(...groupedObject[group])
            }
          })

          const randomIndex = Math.floor(Math.random() * (shuffledArray.length + 1))

          var returnArray = [
            ...shuffledArray.slice(0, randomIndex),
            ...otherArrays,
            ...shuffledArray.slice(randomIndex)
          ]

          setNaok(state => ({ ...state, [key] : returnArray }))
        });

    }
    
    return (
        <NaokContext.Provider
            value={[naok, setNaok]}
        >
            {children}
        </NaokContext.Provider>
    )
}

export default NaokProvider