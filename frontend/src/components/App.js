import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import GlobalStyle from './GlobalStyle';

import { SignIn } from "./SignIn";
import { Homepage } from "./Homepage";
import { Header } from "./Header";

const App = () => {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/signin" element={<SignIn/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
