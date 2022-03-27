import React, {Component} from "react";
import styled from "styled-components";
import RedirectButton from "../../buttons/RedirectButton";

const SuperContainer = styled.div`
  max-width: 1100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;

  &:before {
    font-size: 25px;
    font-weight: bold;
    content: 'Sharing the Fundraiser';
  }
  
`;

class ShareContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        try {
            return (

                <SuperContainer className={`defaultGrey ${this.props.className}`}>
                    <RedirectButton name="Share on Twitter" logo="/logos/twitter.svg" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwww.wciukraine.ca%2F&text=The%20%23WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20peace.%20Donate%20today.%20https%3A%2F%2Fwww.wciukraine.ca%2Fdonate%2F%20"/>
                    <RedirectButton name="Share on Facebook" logo="/logos/facebook.svg" href="https://www.facebook.com/sharer/sharer.php?u=www.wciukraine.ca" />
                    <RedirectButton name="Share on E-Mail" logo="/logos/email.svg" href="mailto:?body=The%20WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20peace.%20Donate%20today.%20https%3A%2F%2Fwww.wciukraine.ca%2Fdonate%2F&subject=Westmount%20C.I.%20Ukraine%20Fundraiser"/>
                    <RedirectButton name="Share on WhatsApp" logo="/logos/whatsapp.svg" href="https://api.whatsapp.com/send/?phone&text=The%20WestmountCI%20community%20is%20looking%20to%20contribute%20to%20the%20Ukrainian%20people%27s%20ever-growing%20needs%20impacted%20by%20the%20current%20war.%20Please%20show%20how%20Westmount%20C.I.%20students%2C%20staff%2C%20and%20family%20can%20stand%20together%20for%20peace.%20Donate%20today.%20https%3A%2F%2Fwww.wciukraine.ca%2Fdonate%2F%20"/>
                </SuperContainer>
            )
        } catch (e) {
            return <div />
        }

    }
}
export default ShareContainer;

