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
  color: #d5d5d5;
  
  &:before {
    font-size: 25px;
    font-weight: bold;
    content: 'Support Ukraine';
  }
  
`;

class DonateContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        try {
            return (

                <SuperContainer className={`defaultGrey ${this.props.className}`}>
                    <RedirectButton name="Donate Now" href="/donate" logo="/icons/help.svg"/>
                </SuperContainer>
            )
        } catch (e) {
            return <div />
        }

    }
}
export default DonateContainer;

