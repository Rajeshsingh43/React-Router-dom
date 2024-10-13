import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react"
import { Card } from '../Components/UI/Card';

export const Movie=()=>{
    const[data , setData]=useState([]);

    // const API="https://www.omdbapi.com/?i=tt3896198&apikey=85097458&s=titanic&page=1"
     const API="https://jsonplaceholder.typicode.com/todos/1"



     const getMovieData=async()=>{

       try {
        const res=await axios.get(API);
        // console.log(res.data.Search);
        setData(res.data.Search)
        
       } catch (error) {
        console.log(error)
        
       }

     }

useEffect(()=>{
    getMovieData();

},[])
 return <ul>
 {
    data.map((curElem)=>{
        return <Card key={curElem.imdbID}
        movieData={curElem}/>
    }
 )}

 </ul>
 
};