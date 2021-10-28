import React from 'react'
import Admin from '../admin/Admin'
import './Registration.css'
import{useState} from 'react'
import axios from 'axios'

function Registration() {

    const [daata,setDaata] = useState({})
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        
     const nam=  e.target.fullname.value
     const gende=  e.target.gender.value
     const emai = e.target.emailaddress.value
     const pass = e.target.password.value
     const deg = e.target.degree.value
     const hs = e.target.hse.value
     const ssl = e.target.sslc.value
    const d=    e.target.dob.value
     const phoe=   e.target.phone.value
    const wor=    e.target.work.value

    const obj = {name: nam,gender:gende,email:emai,password:pass,degree:deg,hse:hs,sslc:ssl,dob:d,mobile:phoe,work_exp_in_months:wor};
    axios.post('http://localhost:4000/route',obj).then((response)=>{
        if (response) {
            alert("Registered")
        }
    })
}
   
return (
<div>
    <Admin/>
    <form onSubmit={handleSubmit}>
<div class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Register</div>
                        <div class="card-body">
                            <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div class="col-md-6">
                                        <input type="text" id="full_name" class="form-control" name="fullname"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                <label for="full_name" class="col-md-4 col-form-label text-md-right">Gender</label>
                                 <label class="radio-inline"> <input type="radio" value="Female"  name="gender"/> Female</label>
                                 <label class="radio-inline"><input type="radio" value="Male" name="gender"/> Male</label></div>
                    
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="emailaddress"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="password"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">Degree</label>
                                    <div class="col-md-6">
                                        <input type="text" id="present_address" class="form-control" name="degree"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">HSE</label>
                                    <div class="col-md-6">
                                        <input type="text" id="present_address" class="form-control" name="hse"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="user_name" class="col-md-4 col-form-label text-md-right">SSLC</label>
                                    <div class="col-md-6">
                                        <input type="text" id="user_name" class="form-control" name="sslc"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="user_name" class="col-md-4 col-form-label text-md-right">Date of Birth</label>
                                    <div class="col-md-6">
                                        <input type="date" id="user_name" class="form-control" name="dob"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="phone_number" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                                    <div class="col-md-6">
                                        <input type="text" id="phone_number" class="form-control" name="phone"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">Work Experience in Month</label>
                                    <div class="col-md-6">
                                        <input type="text" id="present_address" class="form-control" name="work"/>
                                    </div>
                                </div>

                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit"  class="btn btn-primary">
                                        Register
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

export default Registration
