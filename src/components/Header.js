import { useState } from "react";

const Header = () => {
    const [loginBtn ,setLoginBtn] = useState("Login");

    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4vZhk5VYEpE7qBYmuxv_3oKYnSLcThSdEw&usqp=CAU"
            alt="header-logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Cart</li>
            <li><button className="login-btn" onClick={()=>{
              loginBtn==="Login" ? setLoginBtn("Logout") :setLoginBtn("Login");
            }}>{loginBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;