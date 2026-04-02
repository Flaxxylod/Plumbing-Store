
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./../CommonElements/footer/Footer.jsx";
import InnerHeader from "./inner-header/InnerHeader";

const Landing = () => {

    return (

        <div className="Landing-content">

            <InnerHeader />
            <Header />
            <Main />
            <Footer />
        </div>

    );
}

export default Landing;