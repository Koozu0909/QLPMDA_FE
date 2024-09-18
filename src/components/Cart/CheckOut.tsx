import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../../Models/Product';
import { Button, Label, Radio, TextInput } from 'flowbite-react';
import useAxios from '../..';
import { useNavigate } from 'react-router-dom';
interface CartItem {
  item: Product;
  quantity: number;
}

interface Order {
  fullName: string;
  orderId: string;
  phone: string;
  email: string;
  address: string;
  amount: number;
  paymentMethod: string;
  orderInfo: string;
  orderDetails: OrderDetail[];
}
interface OrderDetail {
  productId: number;
  quantity: number;
  productName: string;
  price: number;
}
const CheckOut = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState<string>('cash');

  const { response, error, loading, fetchData } = useAxios()



  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const getCart = () => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')!));
      setTotal(JSON.parse(localStorage.getItem('cart')!).reduce((acc: number, i: CartItem) => acc + i.item.price * i.quantity, 0));
      console.log(total);
    }
  }
  useEffect(() => {
    getCart();
  }, [])

  const fetchProducts = async (api: string, data: Order) => {
    try {
      return await fetchData({ url: api, method: 'POST', data })
    } catch (error) {
      console.log(error)
    }
  }
  ///api/MoMo
  const handleCheckOut = async () => {
    const fullName = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const address = (document.getElementById('address') as HTMLInputElement)?.value || '';
    const paymentMethod = (document.querySelector('input[name="payment"]:checked') as HTMLInputElement)?.value || '';

    const data: Order = {
      fullName,
      orderId: '',
      orderInfo: '',
      phone,
      email,
      address,
      amount: total,
      paymentMethod: paymentMethod,
      orderDetails: cart.map((i: CartItem) => {
        return {
          productId: i.item.id,
          quantity: i.quantity,
          productName: i.item.productName,
          price: i.item.price
        }
      })
    }
    var res = await fetchProducts('/api/Order/payment', data)
    console.log(res);
    if (res) {
      localStorage.removeItem('cart');
      setCart([]);
      setTotal(0);
      if (paymentMethod === 'cash') {
        navigate('/payment/return?orderType=cash&message=Successful.');
      } else if (paymentMethod === 'momo') {
        window.location.href = res;
    }
  }
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Check Out</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 h-auto flex-col">
          <div className="flex w-9/12  gap-4 flex-wrap">
            <div className='w-5/12'>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Họ Tên" />
              </div>
              <TextInput id="name" type="text" sizing="md" />
            </div>
            <div className='w-5/12'>
              <div className="mb-2 block">
                <Label htmlFor="base" value="SDT" />
              </div>
              <TextInput id="phone" type="number" sizing="md" />
            </div>
            <div className='w-5/12'>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Email" />
              </div>
              <TextInput id="email" type="email" sizing="md" />
            </div>
            <div className='w-5/12'>
              <div className="mb-2 block">
                <Label htmlFor="large" value="Địa chỉ" />
              </div>
              <TextInput id="address" type="text" sizing="lg" />
            </div>

          </div>
          <div className="flex w-9/12  gap-4 flex-wrap">
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4">Phương thức thanh toán</legend>
              <div className="flex items-center gap-2 ">
              <Radio 
                id="normal_payment" 
                name="payment" 
                value="cash" 
                checked={paymentMethod === 'cash'} 
                onChange={() => setPaymentMethod('cash')} 
              />
              <Label htmlFor="normal_payment">Thanh toán khi nhận hàng</Label>
              </div>
              <div className="flex items-center gap-2">
              <Radio 
                id="momo_payment" 
                name="payment" 
                value="momo" 
                checked={paymentMethod === 'momo'} 
                onChange={() => setPaymentMethod('momo')} 
              />
              <Label htmlFor="momo_payment">Momo</Label>
              </div>
            </fieldset>
          </div>
          <div className="flex w-9/12  gap-4 flex-wrap">
            <Button onClick={handleCheckOut} color="blue">Check Out</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;