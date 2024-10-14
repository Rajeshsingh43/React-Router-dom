import { useState } from "react"
import faq from "../API/Faq.json"
import { useEffect } from "react"
import { FAQ } from "./UI/FAQ"



export const Accordian=()=>{
    const[data,setData]=useState([])
    const[activeId,setActiveId]=useState(false)

    useEffect(()=>{
        setData(faq);
    },[]);
     console.log(data)

     //handleButton
     const  handleButton=(id)=>{
        setActiveId((prevId)=>(prevId===id ? false : id))
     }


    return (
        <>
          <h1>Accordian</h1>
          <ul className="section-accordion">
          {
            data.map((curElem)=>{
                return <FAQ
                 key={curElem.id} 
                curData={curElem} 
                 isActive={activeId===curElem.id} 
                 onToggle={()=>handleButton(curElem.id)}  
                />
            })}
                   

          </ul>
        </>
    )
}