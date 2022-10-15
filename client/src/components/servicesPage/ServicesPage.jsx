import { Container, Typography } from "@mui/material";
import useServicesPage from "../../hooks/useServicesPage";
import ServiceDisplay from "./ServiceDisplay";
import ServiceSelector from "./ServiceSelector";

export default function ServicesPage() {
  const { currentService } = useServicesPage()
  return (
    <Container maxWidth={"lg"}>
      <ServiceSelector />
      <br />
      <Typography variant="h2" textAlign={"center"} sx={{textDecoration : "underline"}}>
        {currentService.title}
      </Typography>
      <ServiceDisplay />
    </Container>
  );
}