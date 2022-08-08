import { useState, useEffect } from "react";
import axios from "axios";
export const useAxios = () => {
  const [data, setData] = useState(null);

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
