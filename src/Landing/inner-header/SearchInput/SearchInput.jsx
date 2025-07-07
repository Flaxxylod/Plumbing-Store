import "./searchInput.css"
const SearchInput = ({isActive}) => {
    return (
        <div style={isActive? {display:"flex"} : {display:"none"}} className="searchinput__content">
            <div className="container">
                <section className="searchinput__commonblock">
                    <header className="header__searchinput">
                        <h2>Что вы ищите?</h2>
                    </header>
                    <input type="text" placeholder="Раковина для ванной комнаты..." />
                    <button className="orange">Искать</button>
                </section>
            </div>
        </div>
    );
}

export default SearchInput;