import grinder from "../../index.js"

const { CanvasRenderer, Text, Texture, Sprite, Container, MouseControls } = grinder

// basic canvas setup
const w = window.innerWidth
const h = window.innerHeight
const renderer = new CanvasRenderer(w, h)

// add canvas to div #board
document.querySelector("#board").appendChild(renderer.view)

// create a game scene to hold all entities

const container = new Container()

const mouse = new MouseControls(renderer.view)
// create a entity and add it to scene

container.add(mouse)

const texture = new Texture("res/img/head.png")
const hero = new Sprite(texture)

// hero.pos.x = w / 2
// hero.pos.y = h / 2
// const cube = { test: true }
// container.add(hero)

// Main game loop
let dt = 0
let last = 0
let put = false
let money = 4
function loopy(ms) {
    requestAnimationFrame(loopy)
    console.log(money)
    if (mouse.isDown && mouse.pressed) {
        blob(mouse.pos)
        console.log(container)
    }

    const t = ms / 1000
    dt = t - last
    last = t

    // Update everything
    container.update(dt, t)

    // Render everything
    renderer.render(container)
}
requestAnimationFrame(loopy)

function blob(pos) {
    let held = new Sprite(texture)
    held.cost = 1
    held.income = 1
    held.pos.x = pos.x - 16
    held.pos.y = pos.y - 16
    held.speed = 3 + Math.random()
    held.update = () => {
        held.pos.x += held.speed
        if (held.pos.x > window.innerWidth) {
            held.pos.x = 0
        }
        // held.pos.y += 1 + Math.cos(Math.random() + 12)
    }
    if (money >= held.cost) {
        container.add(held)
    }
}
