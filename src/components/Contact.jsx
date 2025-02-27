import Footer from "./Footer";
import ContactBanner from "./ContactBanner";
import ContactContent from "./ContactContent";

function Contact(){
    return(
        <>
            <ContactBanner/>
            <ContactContent/>
            <hr />
            <Footer/>
        </>
    );
}

export default Contact;