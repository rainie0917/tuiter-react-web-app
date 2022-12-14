import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
        <Route path="/*" element={<Labs />}/>
        <Route path="/tuiter/*" element={<Tuiter/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;