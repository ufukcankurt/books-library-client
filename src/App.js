import "./index.css"
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import News from "./pages/news/News";
import UserBooks from "./pages/userBooks/UserBooks";
import UserShelf from "./pages/userShelf/UserShelf";
import BookDetail from "./pages/bookDetail/BookDetail";
import UserFollowers from "./pages/userFollowers/UserFollowers";
import UserFollowings from "./pages/userFollowings/UserFollowings";
import NewsDetail from "./pages/newsDetail/NewsDetail";
import ProfileSettings from "./pages/profileSettings/ProfileSettings";
import UserReadingGoal from "./pages/userReadingGoal/UserReadingGoal";
import PostDetail from "./pages/postDetail/PostDetail";
import CreateNote from "./pages/createNote/CreateNote";
import UserNotes from "./pages/userNotes/UserNotes";
import UserNoteDetail from "./pages/userNoteDetail/UserNoteDetail";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { ChakraProvider } from "@chakra-ui/react"
import CreateNoteDetail from "./pages/createNoteDetail/CreateNoteDetail";
import NewsCategory from "./pages/newsCategory/NewsCategory";
import Books from "./pages/books/Books";

function App() {
  const user = useContext(AuthContext)
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user.user !== null ? <Home /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={user.user === null ? <Login /> : <Navigate replace to="/" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/profile-settings" element={user.user !== null ? <ProfileSettings /> : <Navigate replace to="/login" />} />
          <Route path="/:username" element={user.user !== null ? <Profile /> : <Navigate replace to="/login" />} />
          <Route path="/:username/reading-goal" element={user.user !== null ? <UserReadingGoal /> : <Navigate replace to="/login" />} />
          <Route path="/:username/followers" element={user.user !== null ? <UserFollowers /> : <Navigate replace to="/login" />} />
          <Route path="/:username/followings" element={user.user !== null ? <UserFollowings /> : <Navigate replace to="/login" />} />
          <Route path="/:username/shelf" element={user.user !== null ? <UserBooks /> : <Navigate replace to="/login" />} />
          <Route path="/:username/shelf/:shelfId" element={user.user !== null ? <UserShelf /> : <Navigate replace to="/login" />} />
          <Route path="/:username/notes" element={user.user !== null ? <UserNotes /> : <Navigate replace to="/login" />} />
          <Route path="/:username/notes/:noteId" element={user.user !== null ? <UserNoteDetail /> : <Navigate replace to="/login" />} />
          <Route path="/book/:bookId" element={user.user !== null ? <BookDetail /> : <Navigate replace to="/login" />} />
          <Route path="/post/:postId" element={user.user !== null ? <PostDetail /> : <Navigate replace to="/login" />} />
          <Route path="/news" element={user.user !== null ? <News /> : <Navigate replace to="/login" />} />
          <Route path="/news/:newsId" element={user.user !== null ? <NewsDetail /> : <Navigate replace to="/login" />} />
          <Route path="/news/category/:categoryName" element={user.user !== null ? <NewsCategory /> : <Navigate replace to="/login" />} />
          <Route path="/create-note" element={user.user !== null ? <CreateNote /> : <Navigate replace to="/login" />} />
          <Route path="/create-note/:bookId" element={user.user !== null ? <CreateNoteDetail /> : <Navigate replace to="/login" />} />
          <Route path="/books" element={user.user !== null ? <Books /> : <Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

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

// const PF = process.env.REACT_APP_PUBLIC_FOLDER
// const FETCH = process.env.REACT_APP_FETCH_PATH 
