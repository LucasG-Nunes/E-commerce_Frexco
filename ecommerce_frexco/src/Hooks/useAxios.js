import { useState, useEffect } from "react";
import axios from "axios";
export const useAxios = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const resData = async () => {
      try {
        const response = await axios
          .get("http://dummyjson.com/products", {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((res) => setData(res.data.products));
      } catch (err) {
        console.log(err);
      }
    };
    resData();
  }, []);
  return { data };
};
