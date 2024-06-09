import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch(`/api/test`).then((data) => console.log(data));
  }, []);
  return <div>App</div>;
}
