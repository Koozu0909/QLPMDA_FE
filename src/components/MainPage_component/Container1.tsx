import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import useAxios from '../..';
import Product from '../../Models/Product';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect } from 'react';


var fakeData: Product[] = []
function Container1() {

  const { response, error, loading, fetchData } = useAxios()
  const fetchProducts = async () => {
    try {
      var data = await fetchData({ url: '/api/Products/GetAll', method: 'GET' })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProducts()
    if (response) {
      fakeData = response;
      console.log(fakeData)
    }
  }, [])
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
            <div className="w-full max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="h-72 block">
                <img
                  className="rounded-t-lg w-full h-full p-2"
                  src={item.image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5 h-2/5">
                <a href="#">
                  <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.productName}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </span>
                  <a
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
