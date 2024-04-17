import axios from "axios";
import { urls } from "../constants/urls";

export const getTemperature = async () => {
  const data = await axios.get(urls.temperature);
  console.log(data);
  return data;
};
