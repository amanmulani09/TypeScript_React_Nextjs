import { useTheme } from "./ThemeContext"

const ThemeContextExample = ()=>{
const {state,dispatch} = useTheme();
    return(
        <>
        <h1 style={{fontSize:state.fontSize}}>Theme is : {state.theme}</h1>
        <button onClick={()=> dispatch({
            type:"CHANGE_FONTSIZE",
            payload:12
        })}>
            Change Font
        </button>
        <button style={{
            color:state.theme === 'dark' ? 'white' : 'black',
            backgroundColor:state.theme === 'dark' ? 'black' : 'white',
        }} onClick={()=> dispatch({
            type:"CHANGE_THEME",
        })}>
            Change Theme
        </button>
        </>
    )

}
export default ThemeContextExample;