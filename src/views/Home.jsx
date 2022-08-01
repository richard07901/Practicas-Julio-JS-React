import {useNavigate} from "react-router-dom"

function Home() {
    let navigate = useNavigate()
    return (
        <>
            <p>Soy el Home</p>
            <button 
                onClick={()=>{
                    navigate("./about")
                }}
            >Ir a about</button>
        </>
    )
}

export default Home