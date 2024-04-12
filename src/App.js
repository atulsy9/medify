import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import DetailPage from "./routes/DetailPage/DetailPage";
export const config = {
  endpoint: "https://meddata-backend.onrender.com",
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailPage />} />
        {/* <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/thanks" component={Thanks}/> */}
      </Routes>
    </div>
  );
}

export default App;
