import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Dashboard() {
  const [data,setData]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get("https://wit-back.onrender.com/resource").then((res)=>setData(res.data)).catch((err)=>console.log(err))
  },[])
  return (
    <div className='dashboad'>
    <div className='dash-center'>
    <h1>Welcome to Dashboard</h1>
{console.log(data)}
<table border={1}>
  <tr>
    <th>Full Name</th>
    <th>Vendor Name</th>
    <th>Technology</th>
    <th>Resume</th>
  </tr>
  {data?.map((item)=>{
  return(
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.vendorname}</td>
      <td>{item.technology}</td>
      <td><Link to={`https://wit-back.onrender.com/image/${item.image}`}><button onClick={(e)=>navigate("/dashboard")} className=' b'>Download</button></Link></td>

    
    </tr>
  )

})}
</table>
    </div>


    </div>
  )
}
