import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/Auth/Login/LoginView";
import Register from "./views/Auth/Register/Register";
import { Home } from "./views/home/Home";
import Welcome from "./views/Welcome";
import { Profile } from "./views/Auth/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { TaskList } from "./views/TaskList/TaskList";
import { CreateTask } from "./views/CreateTask/CreateTask";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginView />} />¡
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/create-task" element={<CreateTask />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
