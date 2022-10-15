import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDomSize from "../../hooks/useDomSize";

import useServicesPage from "../../hooks/useServicesPage";
import Arrows from "../landingPage/Arrows";

export default function ServiceDisplay() {
  const { serviceArray, currentService, setCurrentService } = useServicesPage();
  const { width } = useDomSize();
  const navigate = useNavigate();

  const arrowUp = () => {
    const index = currentService.id - 1
    if(serviceArray[index + 1]) {
      setCurrentService(serviceArray[index + 1])
    } else {
      setCurrentService(serviceArray[0])
    }
  }

  const arrowDown = () => {
    const index = currentService.id - 1
    if(serviceArray[index - 1]) {
      setCurrentService(serviceArray[index - 1])
    } else {
      setCurrentService(serviceArray[serviceArray.length  - 1])
    }
  }


  return (
    <Box
      sx={{
        width : "100%",
        height : "800px",
        background : "white",
        marginY : "1em",
        borderRadius : "50px",
        overflow : width < 700 && "scroll",
        overflowX : "hidden",
      }}
    >
      <Grid container sx={{height : "100%"}}>
        <Grid item xs={width < 700 ? 12 : 6} sx={{alignSelf : "center", padding : "3em"}}>
              <div style={{background  : "black", transform : "rotate(180deg)", borderRadius : "50px", margin : ".5em"}}>
                <Arrows cb={arrowUp}/>
              </div>
              <img style={{width : "100%"}} src={currentService.img} alt={"service"} />
              <div style={{background  : "black", borderRadius : "50px", margin : ".5em"}}>
                <Arrows cb={arrowDown}/>
              </div>
        </Grid>
        <Grid item xs={width < 700 ? 12 : 6} sx={{background : "black", padding : "3em", textAlign : "center"}}>
          <Typography sx={{color :"white", whiteSpace : "pre-wrap", fontFamily : "Didot"}}>
            {currentService.description}
          </Typography>
          <Button
            variant="contained"
            sx={{margin : "1em"}}
            onClick={
              () => navigate("/scheduling", { state: { currentService } })
            }
          >
            Schedule now !
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}