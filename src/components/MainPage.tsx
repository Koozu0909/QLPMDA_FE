import  Header  from './Header/Header';
import FooterRaw from './Footer/Footer';
import Carousel from './MainPage_component/SlideShow';
import Container1 from './MainPage_component/Container1';

const MainPage = () => {
    return(
        <div >
            <Header />
            <Carousel />
            <Container1 />
            <Container1 />
            <FooterRaw />
        </div>
    )
}

export default MainPage;
