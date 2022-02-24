import React from 'react';
import Todos from './Todo';

const Printtodo =({todosList,deleteHandler})=> {
  return (
      <div>
      {todosList.map((todo,index)=>
        <div key={index}>
        <h5>{todo} <button onClick={()=>deleteHandler(index)}>Delete</button></h5>
       </div> )}
      </div>
  )
}

export default Printtodo;
