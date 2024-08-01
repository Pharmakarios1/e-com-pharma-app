// src/FetchData.js
import { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/products`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Fetched Data from the backend</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span className="pr-2 text-red-500">{item.id}</span>
            {item.name}
            {item.blog_detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
