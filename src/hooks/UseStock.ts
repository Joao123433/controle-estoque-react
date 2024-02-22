import { useContext } from "react";
import { IContext } from "../contexts/ItemsContext";

export default function useStock() {
  return useContext(IContext)
}