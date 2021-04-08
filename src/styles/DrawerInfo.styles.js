import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
const StyledMeteo = styled.div`
  width: 96%;
  min-height: 100vh;
  background-color: #e4e4e4;
  color: #898989;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  .title {
    width: 100%;
    margin-bottom: 2rem;
  }
  .go-back {
    position: absolute;
    top: 50%;
    left: 98%;
    transform: translate(-50%, -50%);
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
  }
`;
const StyledBack = styled.div`
  position: absolute;
  top: 50%;
  left: 98%;
  transform: translate(-50%, -50%);
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
const StyledItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem 1rem;
  padding: 3rem 0;
  padding-right: 1rem;
`;
const StyledItem = styled.div`
  display:flex;
  padding: 1rem 0;
  h4 {
    font-weight: 400;
  }
  .icon {
    width: 20%;
    i {
      font-size: 2rem;
    }
  }
`;

export {
  StyledMeteo,
  StyledBack,
  StyledContainer,
  StyledItems,
  StyledItem
};