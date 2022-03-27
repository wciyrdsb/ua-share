import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import RedirectPage from "./redirects/RedirectPage";
import DonateContainer from "./containers/donate/DonateContainer";
import ShareContainer from "./containers/share/ShareContainer";


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={{marginBottom: "50px"}}>
                <DonateContainer/>
                <ShareContainer/>
            </div>
        )
    }

}

const Main = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/donate" element={<RedirectPage href={"https://www.gofundme.com/f/tvkrsw-ukraine-humanitarian-appeal"} />} />
      </Routes>
  );
}

const App = () => {
  return (
      <div className="App">
        <Header />
        <Main />
      </div>
  );
}


export default App;
