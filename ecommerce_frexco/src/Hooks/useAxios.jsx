import { useState, useEffect } from "react";
import axios from "axios";
export const useAxios = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const resData = async () => {
      try {
        await axios
          .get("http://localhost:3333/produtos", {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((res) => setData(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    resData();
  }, []);
  return { data };
};


export const useAxiosParams = (fruits) =>{
  const [data, setData] = useState();
  const id = fruits;

  useEffect(() => {
    const resData = async () => {
      try {
        await axios
          .get(`http://localhost:3333/produtos/${id}`, {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((res) => setData(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    resData();
  }, []);
  return { data };

}


