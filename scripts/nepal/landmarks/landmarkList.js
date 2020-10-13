
import { landmarkHTMLLine } from "./landmark.js"

import { useLandmark } from "./landmarkDataProvider.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".list-of-landmarks")

    const landmarksCopy = useLandmark()

    let landmarkHTMLRepresentation = "";

    for (const landmarkObj of landmarksCopy) {
        landmarkHTMLRepresentation += landmarkHTMLLine(landmarkObj)
    }
    
    contentElement.innerHTML += `
    ${landmarkHTMLRepresentation}
    `
}