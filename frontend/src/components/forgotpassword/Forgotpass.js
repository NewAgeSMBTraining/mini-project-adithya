import './Forgotpass.js'
import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'

function Forgotpass() {

    const handleSubmit=(e)=>{
        e.preventDefault()
        
     const nam=  e.target.fullname.value
     const emai = e.target.email.value
     const pass = e.target.password.value
     const obj = {name:nam,email:emai,password:pass};
     console.log(obj)
     axios.put("http://localhost:4000/route/forgot/pass",obj).then((response)=>{
        if (response) {
            console.log(response)
        }
    })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
<div class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Forgot Password</div>
                        <div class="card-body">
                            <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div class="col-md-6">
                                    <input type="text" id="full_name" class="form-control" name="fullname"/>
                                
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">Email</label>
                                    <div class="col-md-6">
                                    <input type="text" id="full_name" class="form-control" name="email"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">New Password</label>
                                    <div class="col-md-6">
                                    <input type="text" id="full_name" class="form-control" name="password"/>
                                    </div>
                                </div>
                                <div class="col-md-6 offset-md-4">
                                        <button type="submit"  class="btn btn-primary">
                                        Reset
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

export default Forgotpass
