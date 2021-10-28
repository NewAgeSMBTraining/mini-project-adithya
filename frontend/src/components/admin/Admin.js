import React from "react";
import "./Admin.css";

function Admin() {
   const clickk=()=>{
     localStorage.removeItem('Token')
     localStorage.removeItem('UID')
   }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/admin">Admin</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="/register">Register</a>
    
      <a className="nav-link active" href="/leaves">Leaves</a>
      
      
    </div>
    <div className="navbar-nav logout ml-auto">
      <a className="nav-link active" onClick={()=>{clickk()}} href="/">Log Out</a>   
    </div>
  </div>
</nav>

      
    </div>
  );
}

export default Admin;
