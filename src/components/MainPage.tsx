import  Header  from './Header/Header';
import Carousel from './MainPage_component/SlideShow';

const MainPage = () => {
    return(
        <div >
            {/* <img src={imageRight} alt="right-financial" className="absolute bottom-0 right-0 w-[30rem]"/> */}
            <Header />
            <Carousel />
        </div>
    )
}

export default MainPage;
