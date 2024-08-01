let potteryID = 0

export const makePottery = (newShape, newWeight, newHeight) => {
    potteryID += 1
    let newPiece = {
        shape: newShape,
        weight: newWeight,
        height: newHeight,
        id: potteryID
    }
    return newPiece

}