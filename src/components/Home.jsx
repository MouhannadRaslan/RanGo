import HomeBanner from "./HomeBanner";
import HomeBuild from "./HomeBuild";
import HomeSupport from "./HomeSupport";
import HomeCare from "./HomeCare";
import HomeModern from "./HomeModern";
import HomeCustomers from "./HomeCustomers";
import HomeFuture from "./HomeFuture";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home(){
    return(
        <>
            <HomeBanner/>
            <HomeBuild/>
            <HomeSupport/>
            <HomeCare/>
            <HomeModern/>
            <HomeCustomers/>
            <HomeFuture/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default Home;