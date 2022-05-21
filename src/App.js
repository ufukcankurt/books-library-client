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

function App() {
  const user = useContext(AuthContext)
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user.user !== null ? <Home /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={user.user === null ? <Login /> : <Navigate replace to="/" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/profile-settings" element={<ProfileSettings />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/reading-goal" element={<UserReadingGoal />} />
          <Route path="/:username/followers" element={<UserFollowers />} />
          <Route path="/:username/followings" element={<UserFollowings />} />
          <Route path="/:username/shelf" element={<UserBooks />} />
          <Route path="/:username/shelf/:shelfId" element={<UserShelf />} />
          <Route path="/:username/notes" element={<UserNotes />} />
          <Route path="/:username/notes/:noteId" element={<UserNoteDetail />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path="/create-note" element={<CreateNote />} />
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