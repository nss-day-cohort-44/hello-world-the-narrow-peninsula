const cityCollection = [
    {
        name: "Kingston"
    },
    {
        name: "Portmore"
    },
    {
        name: "Montego Bay"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}

// let test = useCity()
// console.log(test)