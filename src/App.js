import { Toaster } from "react-hot-toast";
import "./App.css";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes></Routes>
    </div>
  );
}

export default App;
