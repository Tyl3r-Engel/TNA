import { useContext } from "react";
import ServicesPageContext from "../contexts/ServicesPageProvider";

export default function useServicesPage() {
  const { serviceArray, currentService, setCurrentService } = useContext(ServicesPageContext)
  return { serviceArray, currentService, setCurrentService }
}