const Loading = ({color}) => {
    return (
        <svg x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
        <circle fill="none" stroke={color} strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
        <line fill="none" strokeLinecap="round" stroke={color} strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
        <animateTransform 
            attributeName="transform" 
            dur="2s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
        </line>
        <line fill="none" strokeLinecap="round" stroke={color} strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
        <animateTransform 
            attributeName="transform" 
            dur="15s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
        </line>
        </svg>
    )
}

export default Loading