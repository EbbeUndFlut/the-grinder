import Container from "./container.js"
import CanvasRenderer from "./renderer/CanvasRenderer.js"

const STEP = 1 / 60
const MAX_FRAME = STEP * 5

class Game {
    construcor(w, h, parent = "body") {
        this.w = w
        this.h = h
        this.renderer = new CanvasRenderer(w, h)
        document.querySelector(parent).appendChild(this.renderer.view)

        this.scene = new Container()
        console.log(this.scene)
    }

    run(gameUpdate = () => {}) {
        let dt = 0
        let last = 0

        function loopy(ms) {
            requestAnimationFrame(loopy)
            console.log(this)
            const t = ms / 1000 // wir eollen Sekunden
            dt = Math.min(t - last, MAX_FRAME)
            last = t
            console.log(this.scene)
            this.scene.update(dt, t)
            gameUpdate(dt, t)

            this.renderer.render(this.scene)
        }
        requestAnimationFrame(loopy)
    }
}

export default Game
