
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./../CommonElements/footer/Footer.jsx";
import InnerHeader from "./inner-header/InnerHeader";

const Landing = () => {
    
    return (
        <div className="wrap">
            <div className="Landing-content">
                
                <Header />
                <InnerHeader />
                <Main />
                <Footer />
            </div>
        </div>
    );
}

export default Landing;