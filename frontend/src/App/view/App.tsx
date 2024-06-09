import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("http://backend:3000/").then((data) => console.log(data));
  }, []);
  return <div>App</div>;
}
