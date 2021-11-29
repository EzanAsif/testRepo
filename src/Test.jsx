import React, { useEffect } from "react";

const Test = () => {
  //   useEffect(() => {
  const fetchData = async () => {
    let apiData = await fetch(
      "https://ckjnknsdevprod.ddns.net/signals/api/v1",
      {
        method: "GET",
      }
    ).then((res) => res.json());
    let data = apiData;
    console.log(data);
    return data;
  };
  //   }, []);
  let data = ["hi", "hello", "yo"];
  return fetchData();
};

export default Test;
