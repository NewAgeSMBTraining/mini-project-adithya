import React from 'react'
import Userheader from '../userheader/Userheader' 
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

function User() {
    const [data,setData] = useState('')
    useEffect(()=>{
        const deta=localStorage.getItem('UID')
        axios.get(`http://localhost:4000/route/${deta}`).then((response)=>{
        console.log(response.data)
        setData(response.data)
        
      })
    },[])

    return (
        <div>
            <Userheader/>
            <form >
<div class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Hi {data.name}</div>
                        <div class="card-body">
                            <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    </div>

 </form>
        </div>
    )
}

export default User
