`use strict`
function getShippingCost(country) {

    
    const priceChina = 100;
    const priceChile = 250;
    const priceAustralia = 170;
    const priceJamaica = 120;
    


    switch (country) {
        case 'China':
            return `Shipping to ${country} cost ${priceChina} credits`;
        case 'Chile':
            return `Shipping to ${country} will cost ${priceChile} credits`;
        case 'Australia': 
            return `Shipping to ${country} will cost ${priceAustralia} credits`;
        case 'Jamaica':
            return `Shipping to ${country} will cost ${priceJamaica} credits`;
        default:
            return `Sorry, there is no delivery to your country`
    }
}


console.log(getShippingCost("Australia"))
console.log(getShippingCost("China"))
console.log(getShippingCost("Germany"))
console.log(getShippingCost("Chile"))
console.log(getShippingCost("Jamaica"))
console.log(getShippingCost("Sweden"))