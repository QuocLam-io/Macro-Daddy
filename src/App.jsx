import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import CardList from "./components/CardList";
import { useSelector } from "react-redux";

function App() {
  const { signedIn } = useSelector((store) => store.userBio);
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={signedIn ? <CardList /> : <LandingPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
