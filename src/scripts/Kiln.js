export const firePottery = (potteryPiece, temp) => {
    if (temp) {
        potteryPiece.fired = true
    } if (temp > 2200) {
        potteryPiece.cracked = true
    } else if (temp <= 2200) {
        potteryPiece.cracked = false
    }
    return potteryPiece
}