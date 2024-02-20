const Spinner = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" >
            <path  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/>
            <rect 
                style={{
                    transformOrigin: 'center',
                    animation: 'spinner_ani 9s linear infinite',
                }}
                x="11" y="6" rx="1" width="2" height="7"/>
            <rect 
                style={{
                    transformOrigin: 'center',
                    animation: 'spinner_ani .75s linear infinite'
                }}
                x="11" y="11" rx="1" width="2" height="9"/>
        </svg>
    )
}

export default Spinner