import ServiceBanner from "./ServiceBanner";
import ServiceSection from "./ServiceSection";
import ServiceStrong from "./ServiceStrong";
import ServiceBox from "./ServiceBox";
import Subscribe from "./Subscribe";
import Footer from "./Footer";


function Service(){
    return(
        <>
            <ServiceBanner/>
            <ServiceSection/>
            <ServiceStrong/>
            <ServiceBox/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default Service;