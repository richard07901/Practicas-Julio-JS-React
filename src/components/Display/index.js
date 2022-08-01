import style from "./style.module.css"

function Display({counter}){
    return(
        <h2 className={style.counter}>{counter}</h2>
    )

}
export default Display