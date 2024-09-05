import { Carousel } from "flowbite-react";

function SlideShow() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-auto sm:w-10/12 xl:w-8/12 2xl:w-4/5 ">
      <Carousel slide={false}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"  alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"  alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"  alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg"   alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg"  alt="..." />
      </Carousel>
    </div>
  );
}

export default SlideShow;
