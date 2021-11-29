import { signalsData } from "./links";

const fetchData = async () => {
  let data = await signalsData;
  return data;
};

export const signalsDataTest = fetchData();
