import React, {Component} from "react";
import styled from 'styled-components';

const RedirectItem = styled.a`
  background-color: rgba(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.5rem;
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;
  margin-top: 15px;
  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;
  word-break: break-all;
`;

const RedirectContainer = styled.div`
  max-width: 1100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const LoadRing = styled.div`
  display: inline-block;
  width: 122px;
  height: 122px;
  margin: auto;

  //noinspection CssOverwrittenProperties
  &::before {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 12px solid #efefef;
    border-color: #e3e3e3 transparent #e5e5e5 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }

  }
`;



class RedirectPage extends Component {

    render() {
        setTimeout(() => {
            window.location.href = this.props.href;
        }, 1500);

        return (

            <RedirectContainer>
                <LoadRing />
                <RedirectItem>
                    <h3 className="defaultGrey">Redirecting you to <a className="redirectLink" href={this.props.href}>{this.props.href}</a></h3>
                </RedirectItem>
            </RedirectContainer>

        )

    }

}

export default RedirectPage;
