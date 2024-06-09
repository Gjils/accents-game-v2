import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("http://backend:5000/test").then((data) => console.log(data));
    fetch("http://backend:5000/edffsdfgsdfg").then((data) => console.log(data));
  }, []);
  return <div>App</div>;
}
