import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// fakeData
const fakeData = [
  {
    id: 1,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 2,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 3,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 4,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 5,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 6,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 7,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 8,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 9,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    image: "https://picsum.photos/id/237/200/300",
  },
];
function Container1() {
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
                    {item.name}
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
