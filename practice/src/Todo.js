import React,{useState} from 'react';
import Printtodo from './Printtodo';
const Todos =()=>{
    const [task,setTask]=useState("");
    const[todos,setTodos]=useState([]);
   const changeHandler=(e)=>{
       setTask(e.target.value) 
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask("");
        
    }

    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!== indexValue);
        setTodos(newTodos);
    }
        
    return(
        <div>
            <center>
                <div className="card">
                    <div className='card-body'>
                        <h5 className='card-title'>Todo Management Application</h5>
                        <form onSubmit={submitHandler}>
                            <input type="text"  placeHolder='Enter Todo'name="task" value={task} onChange={changeHandler}/>
                            <input type="submit" value="Add" name="Add"/>
                        </form>
                        <Printtodo todosList={todos} deleteHandler={deleteHandler} />
                    </div>
                </div>
                
            </center>
        </div>
    )
} 


export default Todos; 