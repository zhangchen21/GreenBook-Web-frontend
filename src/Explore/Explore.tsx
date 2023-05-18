import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import ContentBar from "./ContentBar/ContentBar";
import './Explore.scss'

function Explore() {
  return (
    <div className="Explore">
      <SideBar />
      <ContentBar />
    </div>
  )
}

export default Explore;
