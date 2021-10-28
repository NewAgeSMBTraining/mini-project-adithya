import React from 'react'
// import {useState} from 'react'


function Filter({filter,setFilter}) {

    // const [filter, setFilter] = useState('')
    return (
        <div>
            <span>
                Search:{' '}
                <input value={filter || ''} onChange={(e)=>setFilter(e.target.value)}/>
            </span>
            
        </div>
    )
}

export default Filter

