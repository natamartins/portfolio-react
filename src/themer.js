import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  colo: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  colo: "#fff"
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;