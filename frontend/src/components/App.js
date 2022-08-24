import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

import { Community } from "./Community";
import { Homepage } from "./Homepage";
import { Header } from "./Header";

const App = () => {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/community" element={<Community/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
