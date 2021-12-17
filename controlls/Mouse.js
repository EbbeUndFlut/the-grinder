export let Mouse = {}

Mouse.Position = { x: 0, y: 0 }
Mouse.isDown = false
Mouse.pressed = false
Mouse.released = false
Mouse.el = document.body
Mouse.posFromEvent = function ({ clientX, clientY }) {
    Mouse.Position.x = clientX
    Mouse.Position.y = clientY
}

Mouse.move = function (e) {
    Mouse.posFromEvent(e)
}
Mouse.down = function (e) {
    Mouse.isDown = true
    Mouse.pressed = true
    Mouse.posFromEvent(e)
}
Mouse.up = function (e) {
    Mouse.isDown = false
    Mouse.release = true
}
Mouse.controlling = function () {
    Mouse.released = false
    Mouse.pressed = false
}
