import { useState, useEffect } from "react";
import axios from 'axios'

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
     const fetchData = async () => {
      setLoading(true)
      await axios(url)
      .then(res => setData(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
    useEffect(() => {
      fetchData()
    }, []);
    return { data, loading };

  return { data, loading, error, handleCancelRequest };
}