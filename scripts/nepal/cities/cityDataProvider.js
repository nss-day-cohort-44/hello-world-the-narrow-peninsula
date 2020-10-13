
const cityCollection = [
    {
        name: "Kathmandu"
    },
    {
        name: "Pokhara"
    },
    {
        name: "Bhaktapur"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}

let test = useCity()

console.log(test);