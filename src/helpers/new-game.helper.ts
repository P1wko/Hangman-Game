import { newGameFun } from "../app.js";

export const createNewGameButtFun = (hangmanElement:HTMLElement, passwordElement:HTMLElement, imageSpaceElement:HTMLElement, imageElement:HTMLElement) =>
{
    const newGameButtElement:HTMLElement = document.createElement("button");
    newGameButtElement.innerText = "New game";
    newGameButtElement.setAttribute("id", "newGameButt");
    
    newGameButtElement.addEventListener("click", () => newGameFun(passwordElement, hangmanElement, imageSpaceElement, imageElement));
    hangmanElement.appendChild(newGameButtElement)
}