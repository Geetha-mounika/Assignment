import React,{useState} from 'react'
const App1 =()=>{
    const[task,setTask]=useState("");
    const[todos,setTodos]=useState([]);
    const changeHandler=(e)=>{setTask(e.target.value)}
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(task);
        setTodos=[...todos,task];
        setTask("");

    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeHolder="enter todo" name="task" value={task} onChange={changeHandler} />
                <button type="submit">Add Todo</button>
            </form>
            <div>
                {todos.map((todo,index)=>
                
                <p>{todos}</p>
                )}
            </div>
        </div>
    )
}
export default App1;