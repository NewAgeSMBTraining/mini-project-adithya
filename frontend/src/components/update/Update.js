import React from 'react'
import Admin from '../admin/Admin'
import './Update.css'
import{useState} from 'react'
import axios from 'axios'
import {useEffect} from 'react'

function Update(props) {
   
    const [checkid, setCheckid] = useState('')
    const [daata,setDaata] = useState({})
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const nam=  e.target.fullname.value
        const gende=  e.target.gender.value
        const emai = e.target.emailaddress.value
        const deg = e.target.degree.value
        const hs = e.target.hse.value
        const ssl = e.target.sslc.value
       const d=    e.target.dob.value
        const phoe=   e.target.phone.value
       const wor=    e.target.work.value
   
       const obj = {name: nam,gender:gende,email:emai,degree:deg,hse:hs,sslc:ssl,dob:d,mobile:phoe,work_exp_in_months:wor};
    const myJSON = JSON.stringify(obj);   
    setDaata(obj)
    console.log(obj)
    console.log(daata)  
     

    axios.put(`http://localhost:4000/route/${localId}`,obj).then((response)=>{
        console.log(response)
        if (response) {
            alert("Update Successful")
           
        }
   })
    
    }
    

    const localId= localStorage.getItem('ID')

    useEffect(()=>{axios.get(`http://localhost:4000/route/${localId}`).then((response)=>{
        setCheckid(response.data)
      })
    },[])

     console.log(checkid)


    return (
<div>
    <Admin/>
    <form onSubmit={handleSubmit}>
<div class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Update</div>
                        <div class="card-body">
                            <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div class="col-md-6">
                                        <input type="text" id="full_name" class="form-control" name="fullname" placeholder={checkid.name}/>
                                    </div>
                                </div>
                                 
                                <div class="form-group">
                                <label for="full_name" class="col-md-4 col-form-label text-md-right">Gender</label>
                                 <label class="radio-inline"> <input type="radio" value="Female"  name="gender"  placeholder={checkid.gender}/> Female</label>
                                 <label class="radio-inline"><input type="radio" value="Male" name="gender" placeholder={checkid.gender}/> Male</label></div>
                                
                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="emailaddress"  placeholder={checkid.email}/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">Degree</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="degree"  placeholder={checkid.degree}/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">HSE</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="hse"  placeholder={checkid.hse}/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email_address" class="col-md-4 col-form-label text-md-right">SSLC</label>
                                    <div class="col-md-6">
                                        <input type="text" id="email_address" class="form-control" name="sslc"  placeholder={checkid.sslc}/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="user_name" class="col-md-4 col-form-label text-md-right">Date Of Birth</label>
                                    <div class="col-md-6">
                                        <input type="date" id="user_name" class="form-control" name="dob"  placeholder={checkid.dob}/>
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <label for="phone_number" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                                    <div class="col-md-6">
                                        <input type="text" id="phone_number" class="form-control" name="phone"  placeholder={checkid.mobile}/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="present_address" class="col-md-4 col-form-label text-md-right">Work Experience in Month</label>
                                    <div class="col-md-6">
                                        <input type="text" id="present_address" class="form-control" name="work"  placeholder={checkid.work_exp_in_months}/>
                                    </div>
                                </div>


                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit"  class="btn btn-primary">
                                        Update
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

export default Update
