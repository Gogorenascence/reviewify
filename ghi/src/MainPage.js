import SearchBar from "./Reviews/Search";
import NewAlbums from "./Reviews/NewAlbums";

function MainPage() {
    return (
        <div>
            <div className="logo-container" id="hide-item1">
                <img
                    src={require("./images/logo-512.png")}
                    height="256"
                    alt="Reviewify Logo"
                />
            </div>
            <div>
                <SearchBar />
                <NewAlbums />
            </div>
        </div>
    );
}

export default MainPage;
