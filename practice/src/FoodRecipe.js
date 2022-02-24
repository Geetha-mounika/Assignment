import React,{useState,useEffect} from 'react';
import Products from './products';

const FoodRecipe = () =>{
    const YOUR_APP_ID ="2269013f";
    const YOUR_APP_KEY=" 06260bd5a70b06e1e404dc4b7d038203";
    const[search,setSearch]=useState("");
    const[data,setData]=useState([]);
    useEffect(()=>
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(response =>response.json()
        ).then(
            data=>setData(data.hints)
        ),[])
    const submitHandler=(e)=>{
        e.preventDefault();
        
    }
  return(
       <div>
       <center>
           <h2>Food Recipe App</h2>
       <form onSubmit={submitHandler}>
           <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>

           <br/>

           <button type="submit" > search</button>
       </form>
       {data.length>=1 ? <Products  data={data}/>:null}
       </center>
       </div>
       );
}

export default FoodRecipe;


