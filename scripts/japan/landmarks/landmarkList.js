import { landmarkHTMLLine } from "./landmark.js"

import {  useLandmark } from "./landmarkDataProvider.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".list-of-landmarks")

    const landmarkCopy = useLandmark()

    let landmarkHTMLRepresentations = "";

    for (const landmarkObj of landmarkCopy) {
        landmarkHTMLRepresentations += landmarkHTMLLine(landmarkObj)
    }
    
    contentElement.innerHTML += `
    ${landmarkHTMLRepresentations}
    `
}