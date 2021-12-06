import grinder from "../../index.js"
import { ressourceLoader } from "../../RessourceLoader.js"
let { game } = grinder

let player = {}
player.Position = { x: 300, y: 60 }

let playerSprite = ressourceLoader.addTexture("./assets/robot.png")
player.Sprite = ressourceLoader.getTexture(playerSprite)

let enemy = {}
enemy.Position = { x: 500, y: 450 }
enemy.Sprite = ressourceLoader.getTexture(playerSprite)

game.build().addEntity(player).addEntity(enemy).run()
