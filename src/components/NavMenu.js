import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./styles/Home.css";

function NavMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="navMenuBtn">
          <div className="navMenuDots" />
          <div className="navMenuDots" />
          <div className="navMenuDots" />
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disabled>
          {props.user.email}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Profile
          <img
            className="menu__profileImg"
            src={require(props.profileImg)}
            alt=""
            key={props.profileImg}
          />
        </MenuItem>
        <MenuItem className="menu__logout" onClick={props.logout}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
export default NavMenu;
