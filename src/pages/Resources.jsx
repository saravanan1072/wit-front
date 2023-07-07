

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Resources() {

    const[fullName,setFullName]=useState('')
    const[resume,setResume]=useState('')
    const[vendorName,setVendorName]=useState('')
    const[technology,setTechnology]=useState('')
    const [state,setState]=useState(false)
    const [vendor,setVendor]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
      axios.get("https://wit-back.onrender.com/vendorRegister").then((res)=>setVendor(res.data)).catch((err)=>console.log(err))
    },[])

    const handleonchange=(e)=>{
      if (e.target.checked) {
        setTechnology([...technology, e.target.value]);
     } else {
      setTechnology(technology.filter((item) => item !== e.target.value));
     }

    }

    const handleData=(e)=>{
      e.preventDefault()
      const formData=new FormData()
      formData.append('resume',resume)
       formData.set('fullName',fullName)
      formData.set('vendorName',vendorName)
      formData.set('technology',technology)
      axios.post("https://wit-back.onrender.com/resource",formData).then((res)=>setState(res.data.result)).catch((err)=>console.log(err))

    }
   
   
  return (
    <div id='resource'>

       <div className='resource-center'>
       <form onSubmit={handleData}>
        <h2>Enter Resource Details</h2>
        <p>Enter resource information here</p><br/>
            <label htmlFor='fullname'>Full Name</label> <br/>
            <input type="text" name='fullname' id='fullname' value={fullName} placeholder=' Enter a name.....' onChange={(e)=>setFullName(e.target.value)}/><br/> <br/>

            <label htmlFor='filename'>Upload Resume</label> <br/>
            <input type="file" name='resume' id='filename'   onChange={(e)=>setResume(e.target.files[0])}/><br/> <br/>
            
            <label htmlFor='vendername'>Vendor Name</label> <br/> 
            <select value={vendorName} onChange={(e)=>setVendorName(e.target.value)}>
            <option Value="" selected disabled>Select your option</option>
            {vendor?.map((option) =><option key={option.id} value={option.name}>{option.name}</option>)}

</select> <br/> <br/>
          

              
                       
            <label htmlFor='tech'>Technology</label> <br/> <br/>
            <input value = "HTML" type = "checkbox" onChange = {handleonchange} id='HTML' /> <label htmlFor='HTML'>HTML</label>   <br/>   
            <input value = "CSS" type = "checkbox" onChange = {handleonchange} id='CSS' /> <label htmlFor='CSS'>CSS</label>         <br/>   
            <input value = "JavaScript" type = "checkbox" onChange = {handleonchange} id='JavaScript' /> <label htmlFor='JavaScript'>JavaScript</label>  <br/>             
            <input value = "React js" type = "checkbox" onChange = {handleonchange} id='React' /> <label htmlFor='React'>React js</label>       <br/>    
            <input value = "Node js" type = "checkbox" onChange = {handleonchange} id='node' /> <label htmlFor='node'>Node js</label>     <br/>    
            <input value = "Mongodb" type = "checkbox" onChange = {handleonchange} id='Mongodb' /> <label htmlFor='Mongodb'>Mongodb</label>   <br/>            
      
    

            <button  className='btn'>submit</button>
        </form>
       </div>
      { console.log(state)}
       {state ? <div>
        { navigate('/dashboard')}
        
        </div>:""}
    </div>
  )
}
