export const toPriceView = price => {
    const prevPrice = price.toString()
    let newPrice = ''
    for(let i = prevPrice.length; i > 0; i--) {
        newPrice = prevPrice[i-1]+newPrice
        if(i%3===0) newPrice = " " + newPrice
    }
    return newPrice
}

