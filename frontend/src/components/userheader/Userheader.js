import React from "react";

function Userheader() {
    const clickk=()=>{
        localStorage.removeItem('Token')
        localStorage.removeItem('UID')
      }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/user">
          User
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/userleaves">
              Register a Leave
            </a>

            <a className="nav-link active" href="/userleavestatus">
              Leave Status
            </a>
            <a className="nav-link active" href="/updateuser">
              Update profile
            </a>
          </div>
        </div>
        <div className="navbar-nav logout">
            <a className="nav-link active" onClick={()=>{clickk()}} href="/">Log Out</a>   
        </div>
      </nav>
    </div>
  );
}

export default Userheader;
