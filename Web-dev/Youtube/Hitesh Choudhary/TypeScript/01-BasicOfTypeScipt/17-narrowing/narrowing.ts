function detectType(val: number | string) {
    if (typeof val === "string") return val.toLowerCase()

    return val + 3
}


function provideID(id: string | null) {
    if (!id) {
        console.log("Please provided ID")
        return
    }
    id.toLowerCase()
}

