import React, { useState } from 'react';
import './mystyle.css';
function Todolist() {

    const[name, setname]= useState('')
    const[fullname, setfullname] = useState([])

    const changehandler = (e)=>{
        setname(e.target.value)
    }
    const clickhandler = ()=>{
        setfullname((olditem)=>{
            return [...olditem, name]
        })
        setname('')
    }
    const deleter= (id)=>{
        setfullname( (olditem) =>{
            return olditem.filter((value, index)=>{
                return index !== id;
            })

        })
    }
    return ( 
        <div className = "card">
            <br/>
            <h1>To Do List</h1>
            <input type="text" name="" value={name}placeholder = " Add a item" onChange = {changehandler}/>
            <button onClick = {clickhandler}>  + </button>
            <br/>
           <br/>
            {
                fullname.map((value , index )=>{
                    return (
                        <div>
                            <li><i onClick = {()=>deleter(index)} className ="fas fa-trash-alt" ></i><pre> </pre> <pre> </pre>{value}</li>
                        </div>
                        );
                    
                })
            }
        </div>
     );
}

export default Todolist;