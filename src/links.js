import Test from "./Test";

let data = Test();
// console.log(data);

const getData = async () => {
  data = await Test();
  console.log("This is inside links");
  console.log(data);
  return data;
};

getData();

export const signalsData = getData().then((data) => {
  data.map((obj, index) => {
    obj.cryptoSymbol += "Ezan";
  });
  return data;
});

export default data;
