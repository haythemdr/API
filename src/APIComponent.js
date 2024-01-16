import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of items from API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default APIComponent;
