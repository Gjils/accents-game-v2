import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch(`http://${import.meta.env.SERVER_URL}/api/test`).then((data) =>
      console.log(data),
    );
  }, []);
  return <div>App</div>;
}
