function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-md navbar-dark"
            style={{
                backgroundColor: "#efeee8",
                fontFamily: "Gill Sans, sans-serif",
                height: "120px",
                borderBottom: "2px solid black",
            }}>
            <div className="container-fluid">
                <img
                    src={require("./output-onlinepngtools.png")}
                    alt="Music Reviewify Logo"
                    height={110}
                />
                <div>
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#c69f3a",
                            color: "#efeee8",
                            borderColor: "#c69f3a",
                            border: "2px, solid, black",
                        }}>
                        Login
                    </button>
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#c69f3a",
                            color: "#efeee8",
                            borderColor: "#c69f3a",
                            border: "2px solid black",
                        }}>
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
