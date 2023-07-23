import { newGameFun } from "../app.js";
export const createNewGameButtFun = (hangmanElement, passwordElement, imageSpaceElement, imageElement) => {
    const newGameButtElement = document.createElement("button");
    newGameButtElement.innerText = "New game";
    newGameButtElement.setAttribute("id", "newGameButt");
    newGameButtElement.addEventListener("click", () => newGameFun(passwordElement, hangmanElement, imageSpaceElement, imageElement));
    hangmanElement.appendChild(newGameButtElement);
};
