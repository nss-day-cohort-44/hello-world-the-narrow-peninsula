const landmarkCollection = [
    {
        name: "Shibuya Crossing"
    },
    {
        name: "Dotonbori"
    },
    {
        name: "Mount Fuji"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}