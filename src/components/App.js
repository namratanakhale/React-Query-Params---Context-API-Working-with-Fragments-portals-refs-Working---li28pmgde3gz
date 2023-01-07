import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  //Write your code here
  const [queryParams] = useSearchParams();
  const name = queryParams.get("name");
  const id = queryParams.get("id");
  const designation = queryParams.get("designation");

  return (
    <div className="details">
      Employee {id} named {name} works as {designation}
    </div>
  );
};

export default App;