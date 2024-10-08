import "./topbar.css";
import Search from "@mui/icons-material/Search";
import Person from "@mui/icons-material/Person";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";
import { UsePostsContext } from "../contexts/PostsContext";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  const {users,setUsers}=UsePostsContext() ;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Gameball</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={users.length!=0?users.filter((ele)=>ele.id===3)[0].profilePicture:null} alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
