import React from 'react'
import { useEffect, useState } from 'react'
import "./SwithMood.css"


function SwithMood() {
    const [theme,setTheme]=useState(localStorage.getItem("currentMood")??"light")
    useEffect(()=>{
        if(theme === "dark"){
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }else{
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }
    },[theme])
   
  return (
    <div className='main-container-mood'
    onClick={()=> {
        localStorage.setItem("currentMood",theme === "dark"?"light":"dark")

        setTheme(localStorage.getItem("currentMood"))

 }}>{theme==="dark"?
                    <i class="bi bi-brightness-high-fill"></i>
                    :<i class="bi bi-moon-fill"></i>}
</div>
  )
}

export default SwithMood