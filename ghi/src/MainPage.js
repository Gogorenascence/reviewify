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
        {theme=="dark" ?(
            <div className="logo-container">
                <img
                    id="main-logo"
                    src={logo}
                    height="256"
                    alt="Reviewify Logo"
                />
                <img
                    id="main-logo-light"
                    src={logoLight}
                    height="256"
                    alt="Reviewify Logo"
                    style={{display: 'none'}}
                />
            </div>
            ):(
            <div className="logo-container">
                <img
                    id="main-logo"
                    src={logo}
                    height="256"
                    alt="Reviewify Logo"
                    style={{display: 'none'}}
                />
                <img
                    id="main-logo-light"
                    src={logoLight}
                    height="256"
                    alt="Reviewify Logo"
                />
            </div>)}
            <div>
                <SearchBar />
            </div>
        </div>
    );
}

export default MainPage;
