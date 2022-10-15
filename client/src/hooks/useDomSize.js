import { useContext } from "react";
import DomSizeContext from "../contexts/DomSizeProvider";

export default function useDomSize() {
  const { width, height } = useContext(DomSizeContext)
  return { width, height }
}