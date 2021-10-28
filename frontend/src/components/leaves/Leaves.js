import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import {useTable,useGlobalFilter} from 'react-table'
import Admin from '../admin/Admin'
import Filter from '../table/Filter'
import './Leaves.css'

function Leaves() {

    const [resdata,setResdata]=useState([])

    useEffect(()=>{axios.get('http://localhost:4000/leave').then((response)=>{
        setResdata(response.data)
      })
    },[])

    const rejectData=(p,e)=>{
      if(e.status==="Pending"){
        e.status="Reject"
        console.log(e.status)
      }    
      axios.put(`http://localhost:4000/leave/${p}`,e).then((response)=>{
      console.log(response)
    })
    }
    
    const approveData=(p,e)=>{
      if(e.status==="Pending"){
        e.status="Approve"
        console.log(e.status)
      } 
      axios.put(`http://localhost:4000/leave/${p}`,e).then((response)=>{
      console.log(response)
    })
    }

     

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
            Header: 'Reason',
            accessor: 'reason',
          },
          {
            Header: 'From',
            accessor: 'from',
          },
          {
            Header: 'To',
            accessor: 'to',
          },
          {
            Header: 'Status',
            accessor: 'status',
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
               <button type="button"  className="reject btn btn-danger" onClick={()=>{rejectData(row.values._id,row.values)}}>Reject</button>
               <button type="button"  className="approve btn btn-success" onClick={()=>{approveData(row.values._id,row.values);}}>Approve</button>
             </tr>            
           )
         })}
         
       </tbody>
     </table>
     </>       
        
    )
}

export default Leaves
