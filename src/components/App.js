import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import RedirectPage from "./redirects/RedirectPage";
import DonateContainer from "./containers/donate/DonateContainer";
import ShareContainer from "./containers/share/ShareContainer";
import RedirectButton from "./buttons/RedirectButton";


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
        <Route exact path="/twitter" element={<RedirectPage href={"https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwww.wciukraine.ca%2F&text=The%20%23WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20peace.%20Donate%20today.%20https%3A%2F%2Fwww.wciukraine.ca%2Fdonate%2F%20"} />} />
        <Route exact path="/facebook" element={<RedirectPage href={"https://www.facebook.com/sharer/sharer.php?u=www.wciukraine.ca%2Fdonate"} />} />
        <Route exact path="/email" element={<RedirectPage href={"mailto:?body=The%20WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20peace.%20Donate%20today.%20https%3A%2F%2Fwww.wciukraine.ca%2Fdonate%2F&subject=Westmount%20C.I.%20Ukraine%20Fundraiser"} />} />
        <Route exact path="/whatsapp" element={<RedirectPage href={"https://api.whatsapp.com/send/?phone&text=The%20WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20peace.%20Donate%20today.%20https%3A%2F%2Fwww.wciukraine.ca%2Fdonate%2F%20"} />} />
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
