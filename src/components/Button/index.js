function Button({value, callback}){
    return(
        <button 
            onClick={callback}
            style={{"color":"white", "backgroundColor":"red"}}>
            {value}
        </button>
    )
}

export default Button