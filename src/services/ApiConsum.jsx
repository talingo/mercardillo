import {useState, useEffect } from "react";

const ApiConsum = (apiURL) => {
  
  console.log(apiURL);
  const [data, setData] = useState([]);
      
  useEffect(() => {
    fetch(apiURL)
      .then(async (response) => {
       if (response.ok) setData(await response.json());
    });
  },[apiURL]);
  console.log(data);
  return data;
}

export default ApiConsum