// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel
let ornament = makePottery("Ornament", 2, 5)
let platter = makePottery("Platter", 7, 2)
let mug = makePottery("Mug", 3, 1)
let chalice = makePottery("Chalice", 2, 8)
let bowl = makePottery("Bowl", 3, 6)
console.log(ornament)
console.log(platter)
console.log(mug)
console.log(chalice)
console.log(bowl)


// Fire each piece of pottery in the kiln

let firedOrnament = firePottery(ornament, 500)
let firedPlatter = firePottery(platter, 500)
let firedMug = firePottery(mug, 500)
let firedChalice = firePottery(chalice, 500)
let firedBowl = firePottery(bowl, 2500)
console.log(firedOrnament)
console.log(firedPlatter)
console.log(firedMug)
console.log(firedChalice)
console.log(firedBowl)


// Determine which ones should be sold, and their price

let sellBowl = toSellOrNotToSell(firedBowl)
console.log(sellBowl)


// Invoke the component function that renders the HTML list

