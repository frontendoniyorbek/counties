import loaderToggle from "./loader"

const request = async (resolve) => {
    loaderToggle(true)
    const req = await fetch(resolve)
    if (!req.ok) {
        loaderToggle(false)
        throw new Error("Something went wrong :(")
    }
    const data = await req.json()
    loaderToggle(false)
    return data
}

export default request