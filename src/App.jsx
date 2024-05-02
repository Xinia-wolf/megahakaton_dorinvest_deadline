import { BrowserRouter } from "react-router-dom";
import "./global.css";
import "./App.css";
import Layout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
