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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:userId" element={<Profile />} />
        <Route path="/:userId/reading-goal" element={<UserReadingGoal />} />
        <Route path="/:userId/profile-settings" element={<ProfileSettings />} />
        <Route path="/:userId/followers" element={<UserFollowers />} />
        <Route path="/:userId/followings" element={<UserFollowings />} />
        <Route path="/:userId/shelf" element={<UserBooks />} />
        <Route path="/:userId/shelf/:shelfId" element={<UserShelf />} />
        <Route path="/:userId/notes" element={<UserNotes />} />
        <Route path="/:userId/notes/:noteId" element={<UserNoteDetail />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
        <Route path="/create-note" element={<CreateNote />} />
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