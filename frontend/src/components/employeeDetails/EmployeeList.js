import React from "react";
import './EmployeeList.css'

function EmployeeList() {
  return (
    <div>
         <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">						
						<a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
					</div>
				</div>
         </div>
    </div>
  );
}

export default EmployeeList;
