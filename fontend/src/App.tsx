import { Routes, Route, Link } from 'react-router-dom';
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
      <h1>Hello React Router v6</h1>
      <ul style={{ "display": "flex" }}>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/register">Register</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/setting">Setting</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

  // return (
  //   <div className="App">
  //     <h1>React</h1>
  //     <h2>{greeting.title}</h2>
  //   </div>
  // );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function NoMatch() {
  return <h2>このページは存在しません。</h2>;
}

export default App;
