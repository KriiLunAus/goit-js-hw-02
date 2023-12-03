`use strict`
function getShippingCost(country) {
    switch (country) {
        case 'China':
            console.log(`Shipping to ${country} cost 100 credits`)
            break;
        case 'Chile':
            console.log(`Shipping to ${country} will cost 250 credits`)
            break;
        case 'Australia': 
            console.log(`Shipping to ${country} will cost 170 credits`)
            break;
        case 'jamaica':
            console.log(`Shipping to ${country} will cost 120 credits`)
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


