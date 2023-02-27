function checkBuiding(floor) {
    let x = floor < 5 ? "Web3bridge" : floor >= 5 && floor < 9 ? 'Nigeria' : floor >= 9 && floor > 13 ? "smart contract" : "Blockchain"

    return x;
}
console.log(checkBuiding(13))
