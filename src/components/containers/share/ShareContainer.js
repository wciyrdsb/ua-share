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
                    <RedirectButton name="Share on Twitter" logo="/logos/twitter.svg" href="/twitter"/>
                    <RedirectButton name="Share on Facebook" logo="/logos/facebook.svg" href="/facebook" />
                    <RedirectButton name="Share on E-Mail" logo="/logos/email.svg" href="/email"/>
                    <RedirectButton name="Share on WhatsApp" logo="/logos/whatsapp.svg" href="/whatsapp"/>
                </SuperContainer>
            )
        } catch (e) {
            return <div />
        }

    }
}
export default ShareContainer;

