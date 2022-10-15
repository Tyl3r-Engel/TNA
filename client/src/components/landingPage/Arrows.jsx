import { Button, Container } from "@mui/material";
import { useState } from "react";

export default function Arrows({ cb }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const arrow = () => (
    <div
      style={{
        position : "relative",
        width : "50px",
        height : "50px",
        overflow : "hidden",
        background : isMouseOver && "darkGray",
        borderRadius : "20px"
      }}
    >
      <div
        onTouchStart={() => setIsMouseOver(true)}
        onTouchEnd={() => setIsMouseOver(false)}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        style={{
          position : "absolute",
          bottom : "25px",
          right : "-35px",
          width : "100px",
          height : "100px",
          border : "10px",
          borderColor : "white",
          borderStyle : "solid",
          transform : "rotate(45deg)"
        }}
      ></div>
    </div>
  )

  return (
    <Container maxWidth="sm">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent : "center",
          height : "100%",
        }}
      >
        <Button
          sx={{ borderRadius : "24px"}}
          onClick={() => {
            if (typeof cb === "function"){
              cb();
              return
            }
            document.body.scrollTop = 925;
            document.documentElement.scrollTop = 925;
          }}
        >
          {arrow()}
        </Button>
      </div>
    </Container>
  );
}