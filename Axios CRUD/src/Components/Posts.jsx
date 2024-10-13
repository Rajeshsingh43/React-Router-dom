import { useEffect } from "react"
import { getPost } from "../API/PostApi";
import { deletePost } from "../API/PostApi";
import { useState } from "react";
import { Form } from "./Form";



export const Posts=()=>{
    const[data,setData]=useState([])


    const getPostData=async()=>{
        const res=await getPost();
        console.log(res.data)
        setData(res.data)
    };


  useEffect(()=>{
    getPostData()

  },[]);

  const handleDeletePost=async(id)=>{
    try {
        const res=await deletePost(id);
        if(res.status===200){
            const newUpdatedPost=data.filter((curPost)=>{
                return curPost.id==!id;
            });
            setData(newUpdatedPost)
        }else{
            console.log("Failed to delete the post" ,res.status);
        }
        
    } catch (error) {
        console.log(error);
        
    }
  }




  return(
    <>
    <section className="section-form">
    <Form data={data} setData={setData}/>

    </section>
    <section className="section-post">
        <ol>
            {
                data.map((curElem)=>{
                    const {id, title,body}=curElem;
                    return(
                        <li key={id}>
                            <p>Title : {title}</p>
                            <p>Body :{body}</p>
                            <button>Edit</button>
                            <button className="btn-delete"onClick={()=>handleDeletePost(id)}>Delete</button>
                        </li>
                    )

                })
            }
        </ol>
    </section>
    </>
  )
}