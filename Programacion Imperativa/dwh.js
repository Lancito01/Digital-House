const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const get_reindeer_weight = (reindeer) => {
    let reindeer_weight = 0
    for(let letter = 0; letter < reindeer.length; letter++){ // leyendo cada letra del reindeer
        reindeer_weight += 2
    }
    return reindeer_weight
}

const get_pack_of_gifts_weight = (pack_of_gifts) => {
    let pack_weight = 0
    for(let gift = 0; gift < pack_of_gifts.length; gift++){ // leyendo cada letra del reindeer
        for (let letter = 0; letter < pack_of_gifts[gift].length; letter++) {
            pack_weight += 1
        }
    }
    return pack_weight
}

const distributeGifts = (packOfGifts, reindeers) => {
    // get total weight of all reindeers
    const total_reindeer_weight = (array_reindeers) => {
        let weight = 0
        for (let reindeer = 0; reindeer < reindeers.length; reindeer++) {
            weight += get_reindeer_weight(reindeers[reindeer])
        }
        return weight
    }
    // let total_reindeer_weight = 
    total_packs = Math.floor(total_reindeer_weight(reindeers) / get_pack_of_gifts_weight(packOfGifts))
    return total_packs
}
console.log(distributeGifts(packOfGifts, reindeers))