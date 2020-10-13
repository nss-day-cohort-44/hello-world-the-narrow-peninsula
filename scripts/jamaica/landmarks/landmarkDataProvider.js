const landmarkCollection = [
    {
        name: "Bob Marley Museum"
    },
    {
        name: "Rose Hall Great House"
    },
    {
        name: "Dunn's River Falls & Park"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}