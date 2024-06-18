import React, { useEffect, useState } from 'react'
import "./style/home.css"

const Home = () => {
    const itemname = "Chcolate-Icecream"
    const itemPrice = 800
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(itemPrice * qty)

    useEffect(()=>{
        setPrice(qty * itemPrice)
    },[qty,itemPrice,setPrice])
    
    const increment = () => {
        setQty(qty + 1)
        setPrice(qty * itemPrice)
    }
    
    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1)
            setPrice(qty * price)
        } else {
            setQty(1)
            setPrice(qty * price)
        }
    }

  

    const checkout = () => {
        console.log("amksbhua");
        fetch("http://localhost:8000/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({
                items:  { id: 1, quantity: qty, price: itemPrice, name: itemname }
                
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.log(e.error)
            })
        // }).then(res => {
        //     if (res.ok) return res.json();
        //     return res.json().then(json => Promise.reject(json));
        // })
        //     .then((url) => window.location = url)
        //     .catch(err => console.log(err))  
    }
    return (
        <>
        
            <div className='choc mx-auto mb-5 w-50 '>
                <div className='choc-head'>
                    <h1 className='text-center text-warning fw-bold home-title '>Chocolate Corner</h1>
                </div >
                <div className='choc-item d-flex align-items-center justify-content-around bg-secondary rounded'>
                    <div className='choc-img'>
                        <img className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPE7OWAGofx34cEnFWKDQQoawR6xB3-clM7Q&s" alt="img" />
                    </div>
                    <div className='choc-details text-light '>
                        <h1 className='text-light fs-2fw-bold'>
                            {itemname}
                        </h1>
                        <p className='fs-4 fw-normal'>Price:- &nbsp;&nbsp; ₹800</p>
                        <div className='choc-qty d-flex align-items-center'>
                            <p className='mt-2'>Quantity :</p>
                            <div className='d-flex align-items-center'>
                                <button className='btn btn-outline-danger fs-3 py-0 border-4 text-light ms-3' onClick={decrement}>-</button>
                                <p className='fs-3 ms-3 mt-3'>{qty}</p>
                                <button className='btn btn-outline-success border-4 fs-3 py-0 text-light ms-3' onClick={increment}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='total-amt text-dark mt-3'>
                    <h1 className='fw-bold'>Total Amount</h1>
                    <p className='fw-bold fs-3'>₹{price}</p>
                </div>
                <button className='btn btn-outline-primary fw-bold w-100' onClick={checkout}>Check-Out</button>
            </div>
        </>

    )
}

export default Home