import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
const StyledMeteo = styled.div`
  width: 90%;
  padding: 0 8rem;
  text-shadow: -2px -2px 0 #343b68b0, 1px 0px 0px rgb(255 255 255 / 40%);
  h1, h4 {
    font-weight: 500;
  }
  h4 {
    margin-bottom: 1rem;
    text-shadow: -2px 0px 0 #343b68b0, 1px 0px 0px rgb(255 255 255 / 40%);
  }
  .icons-and-temp {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    i {
      font-size: 7rem;
      margin-right:2rem;
    }
    h1 {
      font-size: 6rem;
    }
  }
  .local {
    padding-bottom: 1rem;
    span {
      font-weight: 700;
    }
  }
`;
const StyledButton = styled.div`
  height: 100vh;
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  padding: 1rem;
  a {
    display: flex;
    justify-content: center;
    .line1, .line2, .line3 {
      height: 2rem;
      width: 0.3rem;
      box-shadow: 1px 1px 1px 0px rgb(0 0 0 / 32%) inset;
      -webkit-box-shadow: 1px 1px 1px 0px rgb(0 0 0 / 32%) inset;
      -moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.32) inset;
      border-radius: 3px;
      margin-right: 2px;
    }
  }
`;

export {
  StyledMeteo,
  StyledButton,
  StyledContainer
};