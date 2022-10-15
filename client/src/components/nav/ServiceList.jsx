import { Typography, Button, Menu, MenuItem  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import useDomSize from "../../hooks/useDomSize";
import { NavLink } from "react-router-dom";

export default function ServiceList({ list }) {
  const [isTooSmall, setIsTooSmall] = useState(false);
  const { width } = useDomSize();
  useEffect(() => width < 600 ? setIsTooSmall(true) : setIsTooSmall(false), [width]);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const isOpen = Boolean(menuAnchor);
  const handleClick = (event) => setMenuAnchor(event.currentTarget);
  const handleClose = () => setMenuAnchor(null);

  const createdElements = list.map((service, index) => (
    <NavLink
      key={index}
      to={`/${service}`}
      style={
        ({ isActive }) => isActive ? { color : "red", fontStyle: "italic" } : { color : "black" }
      }
    >
      <Typography
        sx={{
          margin : "2em",
          right : "100%",
          textAlign : "center",
          display : "inline"
        }}
      >
        {service}
      </Typography>
    </NavLink>
  ))

  if(isTooSmall) {
    return (
      <>
        <Button onClick={handleClick} sx={{ padding : '0'}}>
          <MenuIcon fontSize="large" sx={{ color: "black" }}/>
        </Button>

        <Menu
          anchorEl={menuAnchor}
          open={isOpen}
          onClose={handleClose}
        >
          {
            createdElements.map((element, index) => (
              <MenuItem key={index} onClick={handleClose}>
                {element}
              </MenuItem>
            ))
          }
        </Menu>
      </>
    )
  }

  return createdElements
}