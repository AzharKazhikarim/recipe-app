import Navbar from "./comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "./comps/content/ContentWrapper";
import Login from "./comps/login/Login";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import SearchPage from "./comps/searchbar/SearchPage";
import { SearchbarContext } from "./contexts/SearchToggleContext";
import Footer from "./comps/footer/Footer";
import Favorites from "./comps/favorites/Favorites";
import SearchedRecipes from "./comps/content/SearchedRecipes";

function App() {
  const [token, setToken] = useState<string>("azharkazhikarimova@gmail.com");
  const [isOpenSearchbar, setIsOpenSearchbar] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ token, setToken }}>
          <SearchbarContext.Provider
            value={{ isOpenSearchbar, setIsOpenSearchbar }}
          >
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/search/:input" element={<SearchedRecipes />} />
              <Route
                path="/categories/:category"
                element={<ContentWrapper />}
              />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <Footer />
          </SearchbarContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
