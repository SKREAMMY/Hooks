import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [comments, setComments] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
        console.log(comments);
      });
  }, []);

  return (
    <>
      {" "}
      <div>HI {comments.postId}</div>
    </>
  );
}

export default App;
