import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Pk);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <p className="text-3xl">Payment</p>
            <p className="text-3xl">${booking.price}</p>
            <p className="text-3xl">{booking.treatement}</p>
            <div className='w-96 my-12' >
                <Elements stripe={stripePromise}>
                    <Checkout booking ={booking} >
                        
                    </Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;