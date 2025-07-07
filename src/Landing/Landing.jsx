
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import InnerHeader from "./inner-header/InnerHeader";

import BreadCrumbs from "./inner-header/BreadCrumbs/BreadCrumbs";

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