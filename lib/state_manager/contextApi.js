import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Loading from "../components/loading";
import { initialState, reducer } from "./reducer";



const DataContext = createContext();



const DataProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer,initialState);
    const navigate = useRouter();
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(()=>{
        const {user} =  state;
        setPageLoading(false)
        if(!user){
            
            if(navigate.pathname !== '/auth/signup'){
                navigate.push('/auth/signin')
            }
        }
    },[navigate.pathname, state])



    if(pageLoading) return <Loading/>

    return(
        <DataContext.Provider value={{state, dispatch}}>
            { children }
        </DataContext.Provider>
    )
}



export default DataProvider


export const useStateValue = ()=> useContext(DataContext);