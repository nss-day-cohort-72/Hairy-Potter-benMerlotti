export let potteryForSale = []

export const toSellOrNotToSell = (potteryObject) => {
    
    if (potteryObject.cracked === false) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40
        } else if (potteryObject.weight < 6) {
            potteryObject.price = 20
        }
        potteryForSale.push(potteryObject)
    }

    return potteryForSale
}