import styled, { css } from "styled-components";
// framer motion
import {motion} from "framer-motion";

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100vh;
    justify-content: center;
  }
`;

const StyledMeteo = styled.div`
  width: 90%;
  padding: 0 8rem;
  text-shadow: -2px -2px 0 #343b68b0, 1px 0px 0px rgb(255 255 255 / 40%);
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  h1 {
    font-weight: 400;
  }
  h4 {
    font-weight: 300;
    margin-bottom: 1rem;
    text-shadow: -2px 0px 0 #343b68b0, 1px 0px 0px rgb(255 255 255 / 40%);
    @media (max-width: 374px) {
      font-size: 13px;
    }
  }
  .icons-and-temp {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    i {
      font-size: 7rem;
      margin-right:2rem;
      @media (max-width: 374px) {
        font-size: 4rem;
        margin-right: 1rem;
      }
      @media (min-width: 375px) and (max-width: 768px) {
        font-size: 5rem;
        margin-right: 1rem;
      }
    }
    h1 {
      font-size: 6rem;
      @media (max-width: 374px) {
        font-size: 3rem;
      }
      @media (min-width: 375px) and (max-width: 768px) {
        font-size: 4rem;
      }
    }
  }
  .local {
    padding-bottom: 1rem;
    @media (max-width: 374px) {
      font-size: 26px;
    }
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
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 100vh;
    height: unset;
    justify-content: center;
  }
  a {
    display: flex;
    justify-content: center;
    .line1, .line2, .line3 {
      height: 2rem;
      width: 0.3rem;
      border-collapse: separate;
      border-radius: 3px;
      margin-right: 2px;
      box-shadow: 1px 1px 1px 0px #a4a4a4 inset;
      -webkit-box-shadow: 1px 1px 1px 0px rgb(0 0 0 / 32%) inset;
      -moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.32) inset;
    }
    @media (max-width: 768px) {
      transform: rotate(90deg);
    }
  }
`;

export {
  StyledMeteo,
  StyledButton,
  StyledContainer
};