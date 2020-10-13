const citizenCollection = [
    {
        name: "Bob Marley"
    },
    {
        name: "Usain Bolt"
    },
    {
        name: "Jimmy Cliff"
    }
]

export const useCitizen = () => {
    return citizenCollection.slice()
}