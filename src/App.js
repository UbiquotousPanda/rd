import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [name, setName] = useState('');
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const response = await axios.get('/visitors');
    setVisitors(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/visitors', { name });
    setVisitors([...visitors, response.data]);
    setName('');
  };

  return (
    <div>
      <h1>Visitor List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {visitors.map((visitor, index) => (
          <li key={index}>{visitor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
