import { useState, useRef, useEffect } from "react";

const api_key="clYLIrv1l5BxWOJIMeP1IfrnRwGEsYFM";
const baseUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;

export default function useFetch(limit) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    isMounted.current = true;
    async function init() {
      try {
        const response = await fetch(baseUrl+limit);
        if (response.ok) {
          const json = await response.json();
          if(isMounted.current) {
            setData(json);
            // console.log(json);
          }
        } else {
          throw response;
        }
      } catch (e) {
        if(isMounted.current) setError(e);
      } finally {
        if(isMounted.current) setLoading(false);
      }
    }
    init();
    return()=>{
      isMounted.current=false;
    }
  }, [limit]);

  return { data, error, loading };
}
