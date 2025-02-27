import AboutBanner from "./AboutBanner";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import AboutStrong from "./AboutStrong";
import AboutSay from "./AboutSay";
import AboutTeam from "./AboutTeam";

function About(){
    return(
        <>
            <AboutBanner/>
            <AboutStrong/>
            <AboutSay/>
            <AboutTeam/>
            
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default About;