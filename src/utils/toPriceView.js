export const toPriceView = price => {
    const prevPrice = price.toString()
    let newPrice = ''
    let count = 0
    for(let i = prevPrice.length; i > 0; i--) {
        newPrice = prevPrice[i-1]+newPrice
        count++
        if(count%3===0 && i!==1) newPrice = " " + newPrice
    }
    return newPrice
}

