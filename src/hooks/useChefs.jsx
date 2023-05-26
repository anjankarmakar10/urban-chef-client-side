import axios from "axios";
import { useEffect, useState } from "react";

const useChefs = () => {
  const [chefs, setChefs] = useState(null);

  const getData = async () => {
    const result = await axios.get(
      "https://urban-chefs-server-2-0.vercel.app/chefs"
    );
    setChefs(result?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return chefs;
};

export default useChefs;
