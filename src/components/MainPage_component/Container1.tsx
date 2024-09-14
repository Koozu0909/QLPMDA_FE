import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import useAxios from '../..';
import Product from '../../Models/Product';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect } from 'react';


var fakeData: Product[] = []
interface Container1Props {
  api: string
}

function Container1({api}: Container1Props) {

  const { response, error, loading, fetchData } = useAxios()
  const fetchProducts = async () => {
    try {
    await fetchData({ url: api, method: 'GET' })
    } catch (error) {
      console.log(error)
    }
  }
  // data ko return ra giá trị khi reload lần đầu tiên
  useEffect(() => {
    fetchProducts()
    if (response) {
      fakeData = response;
      console.log(fakeData)
    }
  }, [])

  // Add to cart (luu xuong local storage) và luu quantity nêu add nhìu lần
  const addToCart = (product: Product) => {
    let cart: { item: Product, quantity: number }[] = []
    let isExist = false
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart')!)
      cart.map((i) => {
        if (i.item.id === product.id) {
          i.quantity += 1
          isExist = true
        }
      })
    }
    if (!isExist) {
      var obj = { item: product, quantity: 1 }
      cart.push(obj)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <div className='w-4/5 m-auto my-4'>
      <h1 className='text-2xl text-red-500 font-bold'>TOP SẢN PHẨM</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {fakeData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
              <a href="#" className="h-72 block">
                <img
                  className="rounded-t-lg w-full h-full p-2"
                  src={item.image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5 h-28">
                <a href="#" className='h-3/5 block'>
                  <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.productName}  
                  </h5>
                </a>
                <div className="flex items-center justify-between h-2/5">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </span>
                  <a
                    onClick={() => addToCart(item)}
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default Container1;
