import { Header } from "./Header";
import {Footer}  from './Footer';
import { Loading } from "./Loading";
import { Outlet, useNavigation } from "react-router-dom";


const AppLayout=()=>{
    const navigation=useNavigation();

    if(navigation.state==="loading") return <Loading/>

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    )
}
export default AppLayout;