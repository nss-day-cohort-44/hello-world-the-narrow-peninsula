import { citizenHTMLLine } from "./citizen.js";
import { useCitizen } from "./citizenDataProvider";

export const citizenList = () => {
    const contentElement = document.querySelector(".list-of-landmarks")
    
    const citizensCopy = useCitizen()

    let citizenHTMLRepresentations = ""
    for (const citizenObj of citizensCopy) {
        citizenHTMLRepresentations += citizenHTMLLine(citizenObj)
    }
    contentElement.innerHTML += `
    ${citizenHTMLRepresentations}
    `
}