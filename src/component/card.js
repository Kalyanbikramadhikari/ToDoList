import './mystyle.css'
import React , {useState} from 'react';


function Card() {
    const [inputer, setinputer] = useState('');
    const[name, setname] = useState([])

    const changehandler = e=>{
        setinputer(e.target.value)
    }
    const clickhandler = ()=>{
        setname((olditems)=>{
            return [...olditems, inputer]
        })
        setinputer('')
    }
    const deleteitem= (id)=>{
        console.log('deleted')
        setname((olditems)=>{
            return olditems.filter((arrayEle, index)=>{
                return index !== id
            })
        })
    }
    return ( 
        <div className = "card">
            <br/>
            <h3 className = "ToDo">ToDo List</h3>
            <br/>
           
            <input type="text" name="" placeholder = " Add a item" value= {inputer} onChange = {changehandler}/>
           
            <button  className = "add" type="" onClick = { clickhandler} > + </button>
 

    <br/>
            
            {
                name.map( (event , index)=>{
                    return (
                        <div id = {index} key = {index}>
                            <li key = {index} id = {index}><i className ="fas fa-trash-alt" onClick = { ()=>{ deleteitem(index)} }></i> <pre> </pre><pre> </pre> {event} </li>
                            
                            
                        </div>
                    );

                })
            }
        </div>
     );
}

export default Card;