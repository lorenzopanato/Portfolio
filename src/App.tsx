import { useEffect } from "react";
import Router from "./Router";

function App() {

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/fortune");
      const data = response.json;
      console.log(data)
    }

    getData();

  }, [])

  return (
    <>
      <Router />
    </>
  );
}

export default App;
