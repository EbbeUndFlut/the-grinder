import { renderer } from "./Renderer.js"
export let game = {}
let entities = []
let systems = []
let controller = []
let canvas = null
let id = 0

game.build = function () {
    let width = window.innerWidth
    let height = window.innerHeight
    let board = document.getElementById("#board") || document.querySelector("body")
    game.canvas = document.createElement("canvas")
    game.canvas.width = width
    game.canvas.height = height
    board.prepend(game.canvas)
    renderer.ctx = game.canvas.getContext("2d")
    return game
}
game.addEntity = function (entity) {
    entity.id = id
    entities.push(entity)
    id += 1
    return game
}
game.addEntities = function (_entities) {
    _entities.map((entity) => entities.push(entity))
    return game
}
game.addControl = function (control) {
    controller.id = id
    controller.push(control)
    id += 1
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
// game.addSytem = function addSystem(system) {
//     systems.push(system)
//     return game
// }
game.run = function () {
    function loop(ms) {
        requestAnimationFrame(loop)
        // systems.forEach((system) => {
        //     console.log(system.length)
        //     system()
        // })
        controller.forEach((control) => {
            control.update()
            control.controlling()
        })
        entities.forEach((entity) => {
            if (entity.log) {
                entity.log()
            }
            if (entity.update) {
                entity.update()
            }
        })
        renderer.render(entities)
    }
    requestAnimationFrame(loop)
}
