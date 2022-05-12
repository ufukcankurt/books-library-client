import "./index.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import News from "./pages/news/News";
import UserBooks from "./pages/userBooks/UserBooks";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:userId" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/:userId/books" element={<UserBooks />} />
        <Route path="/:userId/books/:shelfId" element={<UserBooks />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


// const Books = () => {
//   return (
//       <div className="BooksContainer">
//           Books
//       </div>
//   )
// }

// export default Books