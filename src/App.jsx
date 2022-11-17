import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import CardList from "./components/CardList";
import UserPage from "./components/UserPage";
import { useSelector } from "react-redux";
import {useState} from 'react'

function App() {
  const { signedIn } = useSelector((store) => store.userBio);
  const [numOfCommon, setNumOfCommon] = useState(4);
  const [numOfBranded, setNumOfBranded] = useState(4);

  return (
    <div className="App">
      <Navbar
        setNumOfCommon={setNumOfCommon}
        setNumOfBranded={setNumOfBranded}
      />
      <Routes>
        <Route
          path="/"
          element={
            signedIn ? (
              <CardList
                numOfCommon={numOfCommon}
                setNumOfCommon={setNumOfCommon}
                numOfBranded={numOfBranded}
                setNumOfBranded={setNumOfBranded}
              />
            ) : (
              <LandingPage />
            )
          }
        ></Route>
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
