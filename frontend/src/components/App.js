import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

import { Community } from "./Community";
import { Homepage } from "./Homepage";
import { Header } from "./Header";
import { Streaming } from "./Streaming";

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/community" element={<Community/>}></Route>
          <Route path="/:streaming" element={<Streaming />}></Route>
        </Routes>
    </>
  );
}

export default App;
