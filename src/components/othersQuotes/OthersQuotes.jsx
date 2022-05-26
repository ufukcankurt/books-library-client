import "./othersQuotes.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const OthersQuotes = ({ note }) => {
  const FETCH = process.env.REACT_APP_FETCH_PATH;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "books/";
  const PFPP = process.env.REACT_APP_PUBLIC_FOLDER + "users/";
  const { user: currentUser } = useContext(AuthContext);
  const { bookId } = useParams();

  const [book, setBook] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const getDatas = async () => {
        const resBook = await axios.get(`${FETCH}books/${bookId}`, {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        });
        setBook(resBook.data);

        const resUser = await axios.get(`${FETCH}users?userId=${note.userId}`, {
          headers: {
            token: `Bearer ${currentUser.accessToken}`,
          },
        });
        setUser(resUser.data);
      };
      getDatas();
    } catch (error) {
      console.log(error);
    }
  }, [note]);

  return (
    <div className="othersQuotesContainer">
      <div className="othersQuotesTopside">
        <div className="othersQuotesUserImg">
          <img src={`${PFPP}${user.profilePicture}`} alt="" />
        </div>
        <div className="othersQuotesUserInfo">
          <div className="othersQuotesNamesContainer">
            <div className="othersQuotesNamesContent">
              <p className="othersQuotesFullname">{user.fullname}</p>
              <p className="othersQuotesUsername">@{user.username}</p>
            </div>
            <Link to={`/${user.username}/notes/${note._id}`}>
              <p className="othersQuotesSeeAll">Tamamını gör</p>
            </Link>
          </div>
          <p className="othersQuotesDate">{note.updatedAt?.split("T")[0]}</p>
        </div>
      </div>
      <div className="othersQuotesText">
        <p>{note.summary}</p>
      </div>
    </div>
  );
};

export default OthersQuotes;
