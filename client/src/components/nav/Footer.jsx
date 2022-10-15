import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const redStyles = {
    color : "red",
    fontSize : "15px",
    fontFamily : "sans-serif",
    fontStyle: "italic"
  }

  const whiteStyles = {
    color : "white",
    fontSize : "15px",
    fontFamily : "sans-serif"
  }
  return (
    <div
      style={{
        position : "relative",
        bottom : 0,
        background : "black",
        width : "100%",
        height : "160px"
      }}
    >
      <Grid container sx={{ width : "100%", height : "100%" }}>
        <Grid item xs={6}>
          <Container maxWidth={"sm"}>
            <h2
              style={{
                color : "white",
                marginBottom : ".2em",
                fontFamily : "sans-serif"
              }}
            >
              <strong>Links:</strong>
            </h2>
            <Container maxWidth={'sm'}>
              <NavLink
                end
                to="/"
                style={
                  ({ isActive }) => isActive ? redStyles : whiteStyles
                }
              >
                Home
              </NavLink>
              <br />
              <br />
              <NavLink
                to="/Scheduling"
                style={
                  ({ isActive }) => isActive ? redStyles : whiteStyles
                }
              >
                Scheduling
              </NavLink>
              <br />
              <br />
              <NavLink
                to="/Services"
                style={
                  ({ isActive }) => isActive ? redStyles : whiteStyles
                }
              >
                Services
              </NavLink>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={6}>
        <Container maxWidth={"sm"}>
            <h2
              style={{
                color : "white",
                marginBottom : ".2em",
                fontFamily : "sans-serif"
              }}
            >
              <strong>Contact Me!</strong>
            </h2>
            <Container maxWidth={'sm'}>
              <a
                href="https://www.instagram.com/toxedbytay/?igshid=YmMyMTA2M2Y%3D"
                style={whiteStyles}
              >
                Instagram
              </a>
              <br/>
              <br/>
              <a
                href="tel:+14806489401"
                style={whiteStyles}
              >
                (480)-648-9401
              </a>
              <br/>
              <br/>
              <p
                style={{
                  margin : 0,
                  color : "white",
                  fontSize : "15px",
                  fontFamily : "sans-serif",
                  textDecoration : "underline"
                }}
              >
                toxedbytay@gmail.com
              </p>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}