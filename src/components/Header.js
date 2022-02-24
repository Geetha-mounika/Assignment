import React from 'react';
import CurrencyConvertor from './Currency';
import Currency from './Currency';
export default function Header(props){
    const{countCartItems}=props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart   
                {''}
                {countCartItems?(
                    <button className='badge'>{countCartItems}</button>
                ):('')

                }
                </a>{''}

                <h2>Currency <CurrencyConvertor/> </h2>

            </div>
        </header>
    )
}