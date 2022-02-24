import React from 'react'

export default function Product(props) {
    const{products, onAdd}=props;
  return (
    <div>
        <img className='small' src={products.image} alt={products.name}/>
        <h3>{products.name}</h3>
        <div>${products.price}</div>
        <div>
            <button onClick={()=>onAdd(products)}>
                Add to cart
            </button>
        </div>
    </div>
  )
}
