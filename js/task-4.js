`use strict`
function getShippingCost(country) {

    
    const priceChina = 100;
    const priceChile = 250;
    const priceAustralia = 170;
    const priceJamaica = 120;
    


    switch (country) {
        case 'China':
            console.log(`Shipping to ${country} cost ${priceChina} credits`)
            break;
        case 'Chile':
            console.log(`Shipping to ${country} will cost ${priceChile} credits`)
            break;
        case 'Australia': 
            console.log(`Shipping to ${country} will cost ${priceAustralia} credits`)
            break;
        case 'Jamaica':
            console.log(`Shipping to ${country} will cost ${priceJamaica} credits`)
            break;
        default:
            console.log(`Sorry, there is no delivery to your country`)
    }
}


getShippingCost("Australia")
getShippingCost("Germany")
getShippingCost("China")
getShippingCost("Chile")
getShippingCost("Jamaica")
getShippingCost("Sweden")