import { cityHTMLLine } from "./city.js"

import { useCity } from "./cityDataProvider.js"

export const cityList = () => {
    const contentElement = document.querySelector(".list-of-cities")

    const citiesCopy = useCity()

    let cityHTMLRepresentations = "";

    for (const cityObj of citiesCopy) {
        cityHTMLRepresentations += cityHTMLLine(cityObj)
    }
    
    contentElement.innerHTML += `
    ${cityHTMLRepresentations}
    `
}