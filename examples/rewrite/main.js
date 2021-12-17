import grinder from "../../index.js"
import ressourceLoader from "../../RessourceLoader.js"
import map from "./map.js"
let { game, Mouse } = grinder

document.addEventListener("mousemove", Mouse.move)
document.addEventListener("mousedown", Mouse.down)
document.addEventListener("mouseup", Mouse.up)

Mouse.update = function () {
    if (Mouse.isDown && Mouse.pressed) {
        player.Position.x = Mouse.Position.x
        player.Position.y = Mouse.Position.y
        let enemy = {}
        enemy.Position = { x: Math.random() * 1920, y: 450 }
        enemy.Sprite = ressourceLoader.getTexture(antiSprite)
        enemy.update = swarm
        game.addEntity(enemy)
    }
}
let player = {}
player.Position = { x: 300, y: 60 }
player.update = () => {
    console.log(ressourceLoader.textures)
}

function swarm() {
    this.Position.y += 0.1
}
let playerSprite = ressourceLoader.addTexture("./assets/robot.png")
let antiSprite = ressourceLoader.addTexture("./assets/head.png")
player.Sprite = ressourceLoader.getTexture(playerSprite)

let enemy = {}
enemy.Position = { x: 500, y: 450 }
enemy.Sprite = ressourceLoader.getTexture(antiSprite)

// function badSystem(game, player, enemy) {
//     console.log(player)
// }
console.log(map)
game.build().addEntities(map).addEntity(player).addEntity(enemy).addControl(Mouse).run()
