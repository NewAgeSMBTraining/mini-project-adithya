import './Userleaves.css'
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Userheader from '../userheader/Userheader'


function Userleaves() {
    const [daata,setDaata] = useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        
     const nam=  e.target.fullname.value
     const resa=  e.target.reason.value
     const fro = e.target.from.value
     const to = e.target.to.value


    const obj = {name: nam,reason:resa,from:fro,to:to};
    const myJSON = JSON.stringify(obj);
    
    setDaata(obj)
    console.log(obj)
    console.log(daata)

        
    }
   const clickk=()=>{
     
    axios.post('http://localhost:4000/leave',daata).then((response)=>{
   })}


    return (
        <div>
            <Userheader/>
    <form onSubmit={handleSubmit}>
<div class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Leave Register</div>
                        <div class="card-body">
                            <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div class="col-md-6">
                                        <input type="text" id="full_name" class="form-control" name="fullname"/>
                                    </div>
                                </div>
                                 
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Reason</label>
                                    <div class="col-md-6">
                                        <input type="text" id="full_name" class="form-control" name="reason"/>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">From</label>
                                    <div class="col-md-6">
                                        <input type="date" id="email_address" class="form-control" name="from"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">To</label>
                                    <div class="col-md-6">
                                        <input type="date" id="email_address" class="form-control" name="to"/>
                                    </div>
                                </div>

                                <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary" onClick={()=>{clickk()}}>
                                        Submit
                                        </button>
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

export default Userleaves
