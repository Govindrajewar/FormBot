import "../style/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="title">
        <div className="title-logo" >
          <div className="upper">
            <div className="circleUpper"></div>
            <div className="rectangleUpper"></div>
          </div>
          <div className="lower">
            <div className="circleLower"></div>
            <div className="rectangleLower"></div>
          </div>
        </div>
        <div className="title-header">FormBot</div>
      </div>

      <div className="buttons">
        <button className="signIn-btn">Sign in</button>
        <button className="create-btn">Create a FormBot</button>
      </div>
    </div>
  );
}

export default NavBar;
