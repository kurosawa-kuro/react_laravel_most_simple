import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

const url = "http://localhost:8000"

const client = axios.create({
  baseURL: "http://localhost:8000"
});

type greeting = {
  title: string;
};

function App() {
  const [greeting, setGreeting] = useState<greeting>({
    title: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await client.get(`${url}/api/greeting/`)
      // console.log({ response })
      setGreeting({ "title": response.data });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>React</h1>
      <h2>{greeting.title}</h2>
    </div>
  );
}

export default App;
