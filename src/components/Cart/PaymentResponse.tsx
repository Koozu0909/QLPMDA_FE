import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../../Models/Product';
import { Link } from 'react-router-dom';
import useAxios from '../..';
const PaymentResponse = () => {
  const { response, error, loading, fetchData } = useAxios()

  //get params from url
  const url = window.location.search;
  const params = new URLSearchParams(url);
  let orderType: string | null = params.get('orderType');
  let message: string | null = params.get('message');

  const fetchIsPay = async (api: string) => {
    try {
      await fetchData({ url: api, method: 'POST'})
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (orderType === "momo_wallet" && message === "Successful.") {
      const orderId = params.get('orderId');
      fetchIsPay(`/api/Order/payment/momo-return?orderId=${orderId}`);
    }
  }, [orderType, message]);
  if(orderType === "momo_wallet" &&  message === "Successful."){
    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Payment Response</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Thank you for your purchase</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Your order has been placed successfully</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Please check your email for order confirmation</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Your order will be delivered in 3-5 days</p>
              <Link to="/" className="text-blue-500 dark:text-blue-400 mt-4">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }else if(orderType === "cash" &&  message === "Successful."){
    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Payment Response</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Thank you for your purchase</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Your order has been placed successfully</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Please check your email for order confirmation</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Your order will be delivered in 3-5 days</p>
              <Link to="/" className="text-blue-500 dark:text-blue-400 mt-4">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Payment Response</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Your order has been failed</p>
            <Link to="/" className="text-blue-500 dark:text-blue-400 mt-4">Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentResponse;