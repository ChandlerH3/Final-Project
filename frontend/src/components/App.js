import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

import { Community } from "./Community";
import { Homepage } from "./Homepage";
import { Header } from "./Header";
import { Voting } from "./Voting";
import { Single } from "./Single";

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/community" element={<Community/>}></Route>
          <Route path="/community/:community" element={<Community/>}></Route>
          <Route path="/voting" element={<Voting />}></Route>
          <Route path="/:single" element={<Single />}></Route>
        </Routes>
    </>
  );
}

export default App;
