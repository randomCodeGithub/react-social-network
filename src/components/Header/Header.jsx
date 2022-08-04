import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" />
      <div className={classes.loginBlock}>
        {props.isAuth}
        {props.isAuth ? (
          <div>{props.login} - <button onClick={()=>{props.logout()}}>Log out</button></div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
