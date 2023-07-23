import { createNewGameButtFun } from "./helpers/new-game.helper.js";
export const newGameFun = (passwordElement:HTMLElement, hangmanElement:HTMLElement, imageSpaceElement:HTMLElement, imageElement:HTMLElement) =>
{
    password = words[Math.floor(Math.random() * 6)];
    passwordBlank = "";
    mistakes = 10;
    for(let i = 0; i < password.length; i++)
    {
        passwordBlank += "_";
    }
    passwordElement.innerText = passwordBlank;
    passwordElement.setAttribute("id", "passwdSpace")
    restElement.appendChild(passwordElement);

    hangmanElement.setAttribute("id", "hangmanSpace")
    hangmanElement.innerText = `Lives: ${mistakes}`;
    restElement.appendChild(hangmanElement);

    imageElement.setAttribute("src", "./imgs/11.png")
    imageSpaceElement.setAttribute("id", "imageSpace");
    imageSpaceElement.appendChild(imageElement);
    restElement.appendChild(imageSpaceElement);

    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) button.disabled = false;
}



const letterContainerElement:HTMLElement = document.querySelector("#letters");
const restElement:HTMLElement = document.querySelector("#rest")

const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const words = ["auto", "karuzela", "rewolwer", "samolot", "radio", "matura"];
let password = words[Math.floor(Math.random() * 6)];


alfabet.forEach(letter =>
    {
        const spaceElement:HTMLElement = document.createElement("td");
        const buttonElement:HTMLElement = document.createElement("button");

        buttonElement.addEventListener("click", () =>
        {
            buttonElement.setAttribute("disabled", "true");
            let isMistaken:boolean = true;
            let letterIndex:number[] = [];
            for(let i = 0; i < password.length; i++)
            {
                if(buttonElement.innerText == password[i])
                {
                    isMistaken = false;
                    letterIndex.push(i);
                }
            }
            
            letterIndex.forEach(index =>
                {
                    passwordBlank = replaceFun(passwordBlank, index, buttonElement.innerText); 
                    passwordElement.innerText = passwordBlank;
                })

            if(isMistaken) mistakes--;
            if(mistakes <= 0)
            {
                hangmanElement.innerText = "You lost!";
                imageElement.setAttribute("src", `./imgs/1.png`);
                createNewGameButtFun(hangmanElement, passwordElement, imageSpaceElement, imageElement);
            }
            else
            {
                hangmanElement.innerText = `Lives: ${mistakes}`;
                imageElement.setAttribute("src", `./imgs/${mistakes + 1}.png`);
            }
            if(!passwordBlank.includes("_"))
            {
                hangmanElement.innerText = "Victory!";
                createNewGameButtFun(hangmanElement, passwordElement, imageSpaceElement, imageElement);
            }
        })
        buttonElement.innerText = letter;
        spaceElement.setAttribute("id", "letterSpace");

        spaceElement.appendChild(buttonElement);
        letterContainerElement.appendChild(spaceElement);
    });


    const passwordElement:HTMLElement = document.createElement("td");
    const hangmanElement:HTMLElement = document.createElement("td");
    const imageSpaceElement:HTMLElement = document.createElement("td");
    const imageElement:HTMLElement = document.createElement("img");
    let passwordBlank:string = "";
    let mistakes:number = 10;

    newGameFun(passwordElement, hangmanElement, imageSpaceElement, imageElement);



const replaceFun = (password:string, index:number, letter:string) =>
{
    let s:string;
    return s = password.substring(0, index) + letter + password.substring(index + 1);
}
