import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link, Route, Routes} from "react-router-dom"
import useCounter from './hooks/useCounter';
import useFetch from './hooks/useFetch';
import Home from "./views/Home"
import About from "./views/About"
import Projects from "./views/Projects"


// import Button from './components/Button';
// import Mensaje from './Mensaje';
// import Display from './components/Display';

// function Rojo(){
//   return (
//     <div style={{backgroundColor: "red", color:"#FFF"}}>
//     Rojo
//     </div>
//   )
// }

// function Verde(){
//   return(
//     <div style={{backgroundColor:"green", color:"#FFF"}}>
//     Verde
//     </div>
//     )
// }

function App() {
  // Hooks-->Son ganchos, a la funcionalidad de React component
  // Estado global, el estado que esta disponible en toda la aplicacion
  // para todos los componentes
  // Context API-Redux Librerias para crear  estado global
  // const [counter, setCounter]=useState(0)
  // const incrementar=()=>{
  //   setCounter(counter+1)
  // }
  // const decrementar=()=>{
  //   setCounter(counter-1)
  // }

  // const [text, setText]=useState("");
  // const onChangeHandler=(e)=>{
  //   setText(e.target.value)
  // }
  //################################3
  // const [users, setUsers]=useState([])
  // useEffect(()=>{
    // Nos sirve para hacer llamados a los datos
    // Este callback se llama la primera vez que se renderiza el component
    // CompinetDid Mount
    // Cuando se actualiza recibe una lista de dependencias si algun valor de esa lista cambia
    // el callback se vuelve a ejecutar
    // AddEventLsitener se puede agregar aqui
    // console.log("Soy un efecto")
  //   const getUsers=async()=>{
  //     let data= await fetch("https://jsonplaceholder.typicode.com/users")
  //     let dataJSON=await data.json()
  //     if(data.ok){
  //       setUsers(dataJSON)
  //     }
  //   }
  //   getUsers()
  // }, [users])
  //#######################################
  
  // const [nombre, setNombre]=useState("")
  // const [apellido, setApellido]=useState("")
  // const onChangeHandler=(e)=>{
  //   setNombre(e.target.value)
  // }
  // const onChangeHandler2=(e)=>{
  //   setApellido(e.target.value)
  // }
  // const [user, setUser]=useState({nombre:"", apellido:""})
  // const onChangeHandler=(e)=>{
  //   setUser({
  //     ...user,
  //     [e.target.name]:e.target.value
  //   })
  // }

  // const inputNombre=useRef()
  // const onSubmitHandler=(e)=>{
  //   e.preventDefault()
  //   setUser({
  //     nombre:"", apellido:""
  //   })
  //   inputNombre.current.focus()
  // }
  //############################################# 

  // const [counter, setCounter]=useState(0)
  // const [
  //   counter1,
  //   increment1,
  //   decrement1
  // ]=useCounter(2)
  // const [
  //   counter2,
  //   increment2,
  //   decrement2
  // ]=useCounter(0)

// ##################### 01/08/2022 ###########################

  // const {
  //   isLoading,
  //   data,
  //   error
  // } = useFetch("https://jsonplaceholder.typicode.com/uses", null)

  // if(isLoading){
  //   return (
  //     <p>isLoading...</p>
  //   )
  // }

  // if(error !== null){
  //   return(
  //     <p>{error}</p>
  //   )
  // }
  // if( !isLoading  && error ===null){
  //   return (
  //     <div className="App">
  //       {data.map((user)=>{
  //         return <div key={user.id}>{user.name}</div>
  //       })}
  //     </div>
  //   )
  // }

  // ##########################3
  
    return (
      <div>
        <h1>Mi Pagina Web</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects:1">Projects</Link>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects:project_id' element={<Projects />}/>
        </Routes>
        <footer>Soy el Footer</footer>
      </div>
    )
  

  // return (
    // <div className='App'>
    //    <h1 className='title'> React </h1>
    //    <label for ="color">Ingrese un color: </label>
    //    <input type="text" name="color" value={text} onChange={onChangeHandler}/>
    //    {
    //      text==="rojo"?<Rojo></Rojo>:<Verde></Verde>
    //    }
    //    <br></br>
    //    <div className={text==="rojo"?"rojo":"verde"}>Color</div>
    // </div>

    // <div className='App'>
    //   <ul>
    //     {
    //       users.map(({name, id})=>{
    //         return(
    //           <li key={id}>{name}</li>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>

    // <div className='App'>
    //   <form onSubmit={onSubmitHandler}>
    //     <label htmlFor='nombre'>Nombre: </label>
    //     <input
    //       type="text" 
    //       name='nombre' 
    //       id='nombre' 
    //       value={user.nombre}
    //       onChange={onChangeHandler}
    //       ref={inputNombre}
    //     />
    //     <label htmlFor='nombre'>Apellido: </label>
    //     <input
    //       type="text"
    //       name='apellido'
    //       id='apellido'
    //       value={user.apellido}
    //       onChange={onChangeHandler}
    //     />
    //     <input type="submit" value="Enviar"></input>
    //   </form>
    //   <p>{user.nombre}</p>
    //   <p>{user.apellido}</p>
    // </div>

    // <div className='App'>
    //   <p>Counter</p>
    //   <p>{counter1}</p>
    //   <button onClick={increment1}>Incrementar</button>
    //   <button onClick={decrement1}>Decrementar</button>
    //   <p>Counter 2</p>
    //   <p>{counter2}</p>
    //   <button onClick={increment2}>Incrementar</button>
    //   <button onClick={decrement2}>Decrementar</button>
    // </div>

    // 01/08/2022###########################
    // <div className='App'>
    //   {data.map((user)=>{
    //     return <div key={user.id}>{user.name}</div>
    //   })}
    // </div>
  // )
}


export default App;
