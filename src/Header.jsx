import LogoPic from "./assets/logo.jpg";

function Header() {
  return (
    <body>
      <header>
        <div className="header">
          <img className="logo" src={LogoPic} alt="logo picture"></img>
        </div>
      </header>
    </body>
  );
}

export default Header;
