import SearchBar from "./Reviews/Search";
import logo from "./images/logo-512.png";
import logoLight from "./images/light-logo-512.png";

function MainPage() {
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    return (
        <div>
            <div className="logo-container">
                <img
                    id="main-logo"
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
