import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CurrencyConvertor() {
    const[ratesList,setRatesList]=useState([])
    useEffect(()=>{
        
        getRates();
    },[]);

    const getRates=async()=>{
       const res =await axios.get(`https://v6.exchangerate-api.com/v6/50bb3fbd09a34f4e98bea56b/latest/INR`);
       const {conversion_rates}=res.data;
      const ratesTemp=[];
       for (const [symbol,rate]of Object.entries(conversion_rates)) {
        ratesTemp.push({symbol,rate});
       }
       setRatesList(ratesTemp);
    }
  
  return (
    <div>
        <select onChange={(e)=>{
            const value=e.target.value;
            getRates(value)
            }}>
            {ratesList.map((d)=>(
            <option value={d.symbol} key={d.symbol}>
                {d.symbol}-{d.rate}
                </option>
                ))}
            
        </select>
      {/* <ul>
      {ratesList.map((d)=>(
           <li key={d.symbol}>
               {d.symbol}-{d.rate}
           </li>

       ))}
      </ul> */}

       
    </div>
  )
}

export default CurrencyConvertor;


