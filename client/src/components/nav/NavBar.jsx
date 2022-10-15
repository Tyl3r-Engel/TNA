import logo from "./logo.svg";
import { Container, Grid } from "@mui/material";
import ServiceList from "./ServiceList";
import { Link } from "react-router-dom";

export default function NavBar() {
  const SERVICE_ARRAY = ["Scheduling", "Services"];
  return (
    <header style={{ padding : "1em"}}>
      <Grid container sx={{ background : "white", padding : "1em", borderRadius : "25px"}}>
        <Grid item xs={6}>
          <Container sx={{ width : "300px", float : "left" }}>
            <Link to="/">
              <img style={{ width : "100%"}} src={logo} alt="logo"/>
            </Link>
          </Container>
        </Grid>

        <Grid item xs={6} sx={{ alignSelf : "center", textAlign : "right" }}>
          <ServiceList list={SERVICE_ARRAY}/>
        </Grid>

      </Grid>
    </header>
  );
}