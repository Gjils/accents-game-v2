import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("http://backend:5000/").then((data) => console.log(data));
  }, []);
  return <div>App</div>;
}
