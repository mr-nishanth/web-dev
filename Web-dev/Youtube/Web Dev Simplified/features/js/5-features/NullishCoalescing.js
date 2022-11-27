
function calculatedPrice(price, taxes, description) {
    const total = price * (1 + taxes)
    console.log(`${description} With Tax : ${total}`)
}

calculatedPrice(100, 0.07, "My Cake")
calculatedPrice(100, 0, "My Candy")
calculatedPrice(100, undefined, undefined)

console.log("============ ❌❌❌ =================")

function calculatedPriceDefaultValue(price, taxes, description) {
    taxes = taxes || 0.05
    description = description || "Default item"
    const total = price * (1 + taxes)
    console.log(`${description} With Tax : ${total}`)
}

calculatedPriceDefaultValue(100, 0.07, "My Cake")
calculatedPriceDefaultValue(100, 0, "My Candy") // 0 is false
calculatedPriceDefaultValue(100, undefined, undefined)

console.log("============ ✅✅✅ =================")
/**
 *  Nullish coalescing
 * if the taxes and the description is null or undefined then take right way else corresponding taxes and description values
 */

function calculatedPriceNullishCoalescing(price, taxes, description) {

    // Normal methods
    /*
    if (taxes === null || taxes === undefined) {
        taxes = 0.05
    }
    */

    taxes = taxes ?? 0.05
    description = description ?? "Default item"
    const total = price * (1 + taxes)
    console.log(`${description} With Tax : ${total}`)
}

calculatedPriceNullishCoalescing(100, 0.07, "My Cake")
calculatedPriceNullishCoalescing(100, 0, "My Candy") // 0 is false
calculatedPriceNullishCoalescing(100, undefined, undefined)
calculatedPriceNullishCoalescing(100, undefined, "") // empty string is not undefined or null
let emptyString = ""
console.log(emptyString)
emptyString = "Value"
console.log(emptyString)
