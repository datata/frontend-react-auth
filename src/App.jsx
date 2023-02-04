import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/Auth/Login/LoginView";
import Register from "./views/Auth/Register/Register";
import { Home } from "./views/home/Home";
import Welcome from "./views/Welcome";
import { Profile } from "./views/Auth/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginView />} />¡
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
