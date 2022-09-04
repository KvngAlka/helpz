import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";



const DataContext = createContext();



const DataProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer,initialState);
    const navigate = useRouter()

    useEffect(()=>{
        const {user} =  state;

        if(!user){
            if(navigate.pathname !== '/auth/signup'){
                navigate.push('/auth/signin')
            }
        }
    },[navigate.pathname, state])

    return(
        <DataContext.Provider value={{state, dispatch}}>
            { children }
        </DataContext.Provider>
    )
}



export default DataProvider


export const useStateValue = ()=> useContext(DataContext);