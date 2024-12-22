import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Your Gateway to Best properties</h1>
          <p>
          Browse exclusive listings, connect with experts to guide you every step of the way and secure your ideal home
          </p>
          <SearchBar />
          <div className="boxes">
            {/* <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div> */}
            {/*<div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>  */}
            <div className="box">
              <h1>Numerous</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
