import { createContext, useContext, useReducer } from "react";

type StateType = {
    theme:string,
    fontSize:number,
}

// create the different actions types but it can be a lot of more code to write
//Discriminited Unions
type ColorActionType = {
    type:"CHANGE_THEME"
}
type SizeActionType = {
    type: "CHANGE_FONTSIZE",
    payload:number
}

//so here we can do the same thing with the union 

type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
    theme:"dark",
    fontSize:16,
}

type ContextType = {state:StateType; dispatch:React.Dispatch<ActionType>}

export const ThemeContext = createContext<ContextType>({state:INITIAL_STATE,dispatch:()=>{}});

const reducer = (state:StateType,action:ActionType)=>{

    switch(action.type){
        case "CHANGE_THEME":{
            return {...state,theme:state.theme === "dark" ? "light": "dark" }
        };
        case "CHANGE_FONTSIZE":{
            return {...state,fontSize:action.payload}
        }
        default:
            return state
    }
}

export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
const [state,dispatch] = useReducer(reducer, INITIAL_STATE)
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ():ContextType=>{
    return useContext(ThemeContext)
}