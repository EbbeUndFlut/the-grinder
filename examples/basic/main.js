import grinder from "../../index.js"

const { CanvasRenderer, Text, Texture, Sprite, Container } = grinder

// basic canvas setup
const w = 800
const h = 600
const renderer = new CanvasRenderer(w, h)

// add canvas to div #board
document.querySelector("#board").appendChild(renderer.view)

// create a game scene to hold all entities

const container = new Container()

// create a entity and add it to scene

const texture = new Texture("res/img/hero.jpg")
const hero = new Sprite(texture)

hero.pos.x = w / 2
hero.pos.y = h / 2
const cube = { test: true }
container.add(hero)

// Main game loop
let dt = 0
let last = 0

function loopy(ms) {
	requestAnimationFrame(loopy)

	const t = ms / 1000
	dt = t - last
	last = t

	// Update everything
	container.update(dt, t)

	// Render everything
	renderer.render(container)
}
requestAnimationFrame(loopy)
