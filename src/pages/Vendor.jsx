import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Vendor() {

    const [vendor,setVendor]=useState('')
    const [state,setState]=useState(false)
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    console.log(vendor);
    const url="https://wit-back.onrender.com/vendorRegister"
    const handle=async(e)=>{
      e.preventDefault()
     await axios.post(url,{vendor}).then((res)=>{
      setState(res.data.result)
      setMessage(res.data.msg)
     }).catch((err)=>console.log(err))

       
    }
  return (
    <div id='vendor'>

       <div className='center'>
       <form>
        <h2>Vendor Form</h2>
            <input type="text" name='state' id='input' value={vendor} placeholder=' Enter a Vendor Details.....' onChange={(e)=>setVendor(e.target.value)}/><br/>
            <button onClick={handle} className='btn'>submit</button>
            {message}
        </form>
       </div>
       {state ? <div>
        { navigate('/resource')}
        
        </div>:""}
    </div>
  )
}
