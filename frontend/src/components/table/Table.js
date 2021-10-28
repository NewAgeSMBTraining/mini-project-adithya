import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import Filter from './Filter'
import {useTable,useGlobalFilter} from 'react-table'
import Admin from '../admin/Admin'

import './Table.css'

function Table(props) {


    const [resdata,setResdata]=useState([])
    
    const delData=(p)=>{
      console.log(p)
      axios.delete(`http://localhost:4000/route/${p}`).then((response)=>{
      if (response) {
        window.location.reload();
      }
    })
    }
  
    const arr=[]

    useEffect(()=>{
      const tok={headers:{"authorization":`Bearer ${localStorage.getItem('Token')}`}}
      console.log(tok)
      axios.get('http://localhost:4000/route',tok).then((response)=>{
        response.data.forEach(element => {
          if (element.type!=="admin") {
            arr.push(element)
          }
        });
        setResdata(arr)
      })
    },[])
   

    const data = React.useMemo(
        () => [...resdata],[resdata],[])
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'ID',
            accessor: '_id', // accessor is the "key" in the data
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Gender',
            accessor: 'gender',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Degree',
            accessor: 'degree',
          },
          {
            Header: 'HSE',
            accessor: 'hse',
          },
          {
            Header: 'SSLC',
            accessor: 'sslc',
          },
          {
            Header: 'Date of Birth',
            accessor: 'dob',
          },
          {
            Header: 'Mobile',
            accessor: 'mobile',
          },
          {
            Header: 'Work Experience(in months)',
            accessor: 'work_exp_in_months',
          },

        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
      } = useTable({ columns, data },useGlobalFilter)

      const {globalFilter}=state

    

    return (
    <>
    <Admin/>
    <div className="search">
    <Filter  filter={globalFilter} setFilter={setGlobalFilter}/>
    </div>
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}

               >
                 {column.render('Header')}
               </th>
             ))}
            <th colspan="1" role="columnheader">Action</th>
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}

                   >
                     {cell.render('Cell')}
                     
                   </td>
                 )
               })}
              
               <button type="button" class="btn btn-danger"  onClick={()=>{delData(row.values._id);}}>Delete</button>
               <button type="button" class="btn btn-success" onClick={()=>localStorage.setItem('ID',row.values._id)}><a className="update" href="/update">Update</a></button>
             </tr>            
           )
         })}
         
       </tbody>
     </table>
     </>       
        
    )
}

export default Table
