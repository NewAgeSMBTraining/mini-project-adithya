import React from 'react'
import './Userleavestatus.css'
import axios from 'axios'
import{useEffect} from 'react'
import {useState} from 'react'
import Userheader from '../userheader/Userheader'

function Userleavestatus() {
    const [data,setData] = useState({})
    useEffect(()=>{
        const deta="6176d509dd926123e78fa16a"
        console.log(deta)
        axios.get(`http://localhost:4000/leave/${deta}`).then((response)=>{
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
                        <div class="card-header">Leave Status</div>
                        <div class="card-body">
                            <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div class="col-md-6">
                                        {data ? <h5>{data.name}</h5> : <h5>Not applied</h5>}
                                
                                    </div>
                                </div>
                            
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">Reason</label>
                                    <div class="col-md-6">
                                    {data ? <h5>{data.reason}</h5> : <h5>Not applied</h5>}
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">From</label>
                                    <div class="col-md-6">
                                    {data ? <h5>{data.from}</h5> : <h5>Not applied</h5>}
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">To</label>
                                    <div class="col-md-6">
                                    {data ? <h5>{data.to}</h5> : <h5>Not applied</h5>}
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">Status</label>
                                    <div class="col-md-6">
                                    {data ? <h5>{data.status}</h5> : <h5>Not applied</h5>}
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

export default Userleavestatus
