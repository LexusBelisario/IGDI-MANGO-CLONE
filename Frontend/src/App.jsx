import { useState } from "react";
import Login from "./pages/Admin/loginpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
