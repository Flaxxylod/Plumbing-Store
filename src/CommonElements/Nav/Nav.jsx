import "./nav.css"
import logo from "./../../assets/Common/navigation/Logo.svg"
import phone from "./../../assets/Common/navigation/icon/iphone.svg"
import search from "./../../assets/Common/navigation/icon/group.svg"
const Nav = () => {
    return (
        <nav className="Nav-content">
            <div className="container" style={{maxWidth: "1410px", }}>
                <div className="nav-block">
                    <div style={{ display: "flex", alignItems: "center", columnGap: "26px" }}>
                        <img src={logo} alt="" />
                        <span>Разработано в Германии. Сделано в россии.</span>
                    </div>

                    <div style={{display: "flex", columnGap:"32px", alignItems: "center",}}>
                        <section>
                            <img src={phone} alt="" />
                            <a href="tel:+7-905-543-23-45">+7 (905) 543 23 45</a>
                        </section>
                        <button className="Search-button"><img src={search} alt="" /></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;