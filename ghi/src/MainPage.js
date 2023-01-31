import SearchBar from "./Reviews/Search";
import logo from "./images/logo-512.png";

function MainPage() {
    return (
        <div>
            <div className="logo-container" id="main-logo">
                <img
                    src={logo}
                    height="256"
                    alt="Reviewify Logo"
                />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    );
}

export default MainPage;
