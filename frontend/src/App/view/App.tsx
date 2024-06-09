import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/test`).then((data) =>
      console.log(data),
    );
  }, []);
  return <div>App</div>;
}
