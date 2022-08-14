import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CarEntry from "./Components/Pages/CarEntry/CarEntry";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import ManageItems from "./Components/Pages/ManageItems/ManageItems";
import AddItems from "./Components/Pages/AddItems/AddItems";
import MyItem from "./Components/Pages/MyItem/MyItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Components/Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/carentry/:id"
          element={
            <RequireAuth>
              <CarEntry></CarEntry>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route
          path="/manageitems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/additem" element={<AddItems></AddItems>}></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
