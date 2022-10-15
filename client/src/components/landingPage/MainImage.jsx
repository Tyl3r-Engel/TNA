import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import useDomSize from "../../hooks/useDomSize";
import Arrows from "./Arrows";
import mainImageLg from "./mainImageLg.jpg";
import mainImageMd from "./mainImageMd.jpg";

export default function MainImage() {
  const { width } = useDomSize();
  useEffect(() => {},[width])
  const getImageSrc = () => width > 900 ? mainImageLg : mainImageMd;
  const getStyles = () => {
    if(width > 900) {
      return (
        {
          position : "absolute",
          top : "55%",
          width: "100%",
          height : "100px",
          background : "rgb(245,229,241)"
        }
      );
    } else {
      return (
        {
          position : "absolute",
          top : "50%",
          width: "100%",
          height : "100px",
          background : "rgb(245,229,241)"
        }
      );
    }
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          position : "relative",
          width : "100%",
          height : "100%",
          overflow : "hidden",
          borderRadius : "25px"
        }}
      >
        <div style={getStyles()}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent : "center",
              height : "100%",
            }}
          >
            <Typography fontFamily={"cursive"} fontSize={width > 1123 ? "80px" :"8vw"}>
              Embrace Your Beauty
            </Typography>
          </Box>
          <Box>
            <Arrows />
          </Box>
        </div>
        <img
          src={getImageSrc()}
          alt="mainImage"
          style={{
            width : "100%",
            height : "100%",
          }}
        />
      </Box>
    </Container>
  )
}