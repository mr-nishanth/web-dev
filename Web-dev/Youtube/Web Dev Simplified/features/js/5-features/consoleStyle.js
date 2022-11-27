// ConsoleStyle
function calculatedPriceNullishCoalescing(price, taxes, description) {
    taxes = taxes ?? 0.05
    description = description ?? "Default item"
    const total = price * (1 + taxes)
    console.log(`
        %c${description} With Tax : %c${total}`,
        "font-weight: bold;color:green",
        "color:red"
    )
}

calculatedPriceNullishCoalescing(100, 0.07, "My Cake")
calculatedPriceNullishCoalescing(100, 0, "My Candy")
calculatedPriceNullishCoalescing(100, undefined, "") 