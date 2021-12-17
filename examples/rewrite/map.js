import grinder from "../../index.js"
import ressourceLoader from "../../RessourceLoader.js"

let { game } = grinder

let mapSprite = ressourceLoader.addTexture("./assets/terrain.png")
console.log(mapSprite)

let map = []

let offX = 69
let offY = 35
for (let i = 0; i < 7; i++) {
    let tile = {}
    tile.Position = { x: 150 + offX * i, y: 300 + offY * i }
    tile.Sprite = ressourceLoader.getTexture(mapSprite)
    map.push(tile)
}

export default map
