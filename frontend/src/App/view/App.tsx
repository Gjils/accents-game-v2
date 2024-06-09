import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("http://89.169.54.5:80/api").then((data) => console.log(data));
  }, []);
  return <div>App</div>;
}
