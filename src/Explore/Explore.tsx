import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import ContentBar from "./ContentBar/ContentBar";
import './Explore.scss'
import { useAppSelector } from "../hooks";
import { selectShowSideBar } from "../AppSlice";

function Explore() {
  const showNavItem = useAppSelector(selectShowSideBar);

  return (
    <div className="Explore">
      {
        showNavItem && <SideBar />
      }
      <ContentBar />
    </div>
  )
}

export default Explore;
