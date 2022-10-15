import { Box, Button, Grid, Typography } from "@mui/material";
import useServicesPage from "../../hooks/useServicesPage";

export default function ServiceSelector() {
  const { serviceArray, currentService, setCurrentService } = useServicesPage();
  return (
    <Box sx={{ width : "100%", height : "100%", background : "black", borderRadius : "50px"}}>
      <Typography variant="h3" sx={{color : "white", textAlign : "center", paddingTop : ".5em", fontFamily : "Avantgarde"}}>
        Services:
      </Typography>

      <Grid container sx={{justifyContent : "center", height : "100%", padding : "1em"}}>
        {
          serviceArray.map((element, index) => (
          <Grid item key={index}>
            <Box sx={{margin : "1em", background : currentService?.id === element.id ? "lime" : "lightGrey", borderRadius : "25px"}}>
              <Button sx={{borderRadius : "25px"}} onClick={e => setCurrentService(element)}>
                <img style={{width : "50px", height : "50px", borderRadius : "25px", marginRight : "10px"}} src={element.img} alt={"first img"}/>
                <Typography>{element.title}</Typography>
              </Button>
            </Box>
          </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}