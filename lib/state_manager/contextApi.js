import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Loading from "../components/loading";
import { SIGNIN } from "./constants";
import { initialState, reducer } from "./reducer";



const DataContext = createContext();



const DataProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer,initialState);
    const navigate = useRouter();
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(()=>{
        const user =  state.user;
        try{
            
            if(!user){
                const localUser = localStorage.getItem("userData");
                const _user = JSON.parse(localUser);
                setPageLoading(false)
                
                if(!_user && navigate.pathname !== '/auth/signup'){
                    navigate.push('/auth/signin');
                }else{
                    dispatch({type : SIGNIN, payload : _user})
                }
            }else{
            }
            
        }catch(err){
            console.log("Error",err)
        }
        
    },[navigate.pathname, state.user])



    if(pageLoading) return <Loading/>

    return(
        <DataContext.Provider value={{state, dispatch}}>
            { children }
        </DataContext.Provider>
    )
}



export default DataProvider


export const useStateValue = ()=> useContext(DataContext);