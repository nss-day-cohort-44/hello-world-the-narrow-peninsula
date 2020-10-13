import { citizenHTMLLine } from "./citizen.js"

import { useCitizen } from "./citizenDataProvider.js"

export const citizenList = () => {
    const contentElement = document.querySelector(".list-of-famous-citizens")

    const citizenCopy = useCitizen()

    let citizenHTMLRepresentations = "";

    for (const citizenObj of citizenCopy) {
        citizenHTMLRepresentations += citizenHTMLLine(citizenObj)
    }
    
    contentElement.innerHTML += `
    ${citizenHTMLRepresentations}
    `
}