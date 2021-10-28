import React from 'react'
import axios from 'axios'
import './Login.css'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
  // const [daata,setDaata] = useState({})

  const history=useHistory()

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const emai = e.target.email.value
    const pass = e.target.password.value
   const obj = {email:emai,password:pass};

  axios.post("http://localhost:4000/route/login",obj).then((response)=>{
    localStorage.setItem('Token',(response.data.accessToken))
    console.log(response.data.value)
    localStorage.setItem('UID',(response.data.value._id))
    if(response.data.value.type==="admin"){
      history.push("/admin")
    }
    else{
      history.push("/user")
    }
  }).catch(error=>{
   alert("Failed")
  })

}

return (
  <div>                 
<body>
    <div class="login-clean">
        <form method="post" onSubmit={handleSubmit}>
            <h2 class="sr-only">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-navigate"></i></div>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"/></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit" >Log In</button>
            </div><a href="/forgotpass" class="forgot">Forgot your password?</a>
            </form>
    </div>
</body>
      
    </div>
  )
}

export default Login
