import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/Auth/Login/LoginView";
import Profile from "./views/Profile";
import Welcome from "./views/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
