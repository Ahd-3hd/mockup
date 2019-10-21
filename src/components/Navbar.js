import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import enIcon from "../assets/en.png";
import arIcon from "../assets/ar.png";
import trIcon from "../assets/tr.png";
import ruIcon from "../assets/ru.png";
import chIcon from "../assets/ch.png";
import LanguageIcon from "@material-ui/icons/Language";
import CallIcon from "@material-ui/icons/Call";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuIcon from "@material-ui/icons/Menu";
const Wrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  background: #0a4a7f;
  height: 4rem;
  width: 100%;
  overflow: hidden;
  #menu-button {
    display: none;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li a {
      font-size: 0.8rem;
    }
  }
  ul li img {
    width: 100%;
    min-width: 25px;
    max-width: 35px;
  }
  #nav-links {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #fff;
    li {
      margin: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  h1 {
    flex: 0.2;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;
    align-self: center;
  }
  #langs {
    flex: 0.4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      margin: 0 0.2rem;
    }
  }
  @media (max-width: 855px) {
    #nav-links {
      display: none;
    }
    #menu-button {
      display: flex;
    }
    #language-button {
      display: none;
    }
  }

  @media (max-width: 1250px) {
    #langs {
      display: none;
    }
  }
`;
export default function Navbar() {
  return (
    <Wrapper>
      <h1>LOGO</h1>
      <ul id="nav-links">
        <li>
          <a href="#dead">HOME</a>
        </li>
        <li>
          <a href="#dead">PROPERTIES</a>
        </li>
        <li>
          <a href="#dead">SERVICES</a>
          <ExpandMoreIcon style={{ color: "#fff" }} />
        </li>
        <li>
          <a href="#dead">BUYERS GUIDE</a>
          <ExpandMoreIcon style={{ color: "#fff" }} />
        </li>
        <li>
          <a href="#dead">NEWS</a>
        </li>
        <li>
          <a href="#dead">ABOUT US</a>
        </li>
        <li>
          <CallIcon style={{ color: "#fff" }} />
          <a href="tel:123-456-7890">123-456-7890</a>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <form>
            <FormControl style={{ width: "5rem" }}>
              <InputLabel htmlFor="age-native-simple">currency</InputLabel>
              <Select
                native
                inputProps={{
                  name: "age",
                  id: "age-native-simple"
                }}
              >
                <option value="" />
                <option value={10}>€</option>
                <option value={20}>$</option>
                <option value={30}>₺</option>
              </Select>
            </FormControl>
          </form>
        </li>
      </ul>
      <ul id="langs">
        <li>
          <a href="#dead">
            <img src={enIcon} alt="english" />
          </a>
        </li>
        <li>
          <a href="#dead">
            <img src={arIcon} alt="arabic" />
          </a>
        </li>
        <li>
          <a href="#dead">
            <img src={trIcon} alt="turkish" />
          </a>
        </li>
        <li>
          <a href="#dead">
            <img src={ruIcon} alt="russian" />
          </a>
        </li>
        <li>
          <a href="#dead">
            <img src={chIcon} alt="chinese" />
          </a>
        </li>
      </ul>
      <div
        style={{
          alignSelf: "center",
          margin: "0.8rem",
          marginLeft: "auto"
        }}
        id="language-button"
      >
        <LanguageIcon style={{ color: "#fff" }} />
        <ExpandMoreIcon style={{ color: "#fff" }} />
      </div>
      <div
        style={{
          alignSelf: "center",
          margin: "0.8rem",
          marginLeft: "auto"
        }}
        id="menu-button"
      >
        <MenuIcon style={{ color: "#fff" }} />
      </div>
    </Wrapper>
  );
}
