import { renderer } from "./Renderer.js"
export let game = {}
let entities = []

game.build = function () {
    let width = window.innerWidth
    let height = window.innerHeight
    let board = document.getElementById("#board") || document.querySelector("body")
    let canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    board.prepend(canvas)
    renderer.ctx = canvas.getContext("2d")
    return game
}
game.addEntity = function (entity) {
    entities.push(entity)
    return game
}
game.addGameName = function addGameName(name) {
    game.name = name
    return game
}

game.readGameName = function readGameName() {
    console.log(game.name)
    return game
}

game.run = function () {
    console.log("los los los")

    function loop(ms) {
        requestAnimationFrame(loop)
        entities.forEach((entity) => {
            if (entity.log) {
                entity.log()
            }
            if (entity.Sprite) {
                renderer.render(entity)
            }
        })
    }
    requestAnimationFrame(loop)
}
