import { Container, Paper, Typography, Box } from "@mui/material";
import MainImage from "./MainImage";
import hashTagImg from './hashTagImg.jpg'

export default function LandingPage() {
  return (
    <Container maxWidth={"md"}>
      <MainImage />

      <Paper sx={{ margin : "2em", padding : "2em" }} elevation={12}>
        <Typography textAlign={"center"}>
          <h1><strong>About Me:</strong></h1>
          My name is Taylor and I am a Licensed Aesthetician and Registered Nurse. I started my nursing career at
          St Joes in ICU. In 2018 my mom was very sick with cancer and In 2019 became her full-time caretaker.
          After she passed in 2019 working in the ICU was too difficult. I had felt the pain my patients’ families
          were going through. I left the hospital and found an amazing job working for an infusion pharmacy. I loved
          the job but missed patient interaction. I started learning injectables, Botox/Filler, in January 2021 and am
          loving it. I have set up a studio and am currently accepting new patients. I love helping people feel
          beautiful and confident.

          <br />
          <br />

          When I’m not working I spend my time with my two Boxers, Benjamin and Birdie.
          I love home decor, travel and spending time with friends and family.
        </Typography>

        <Box sx={{position : "relative", width : "100%", height : "100%", margin : "1em"}}>
          <img src={hashTagImg} alt={"hash tag img"} style={{ width : "100%"}}/>
        </Box>
      </Paper>

    </Container>
  );
}