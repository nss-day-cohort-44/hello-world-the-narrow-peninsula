const cityCollection = [
    {
        name: "Hida-Takyama"
    },
    {
        name: "Otaru"
    },
    {
        name: "Nara"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}

let test = useCity()

console.log(test);