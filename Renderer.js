export let renderer = {}

renderer.render = function (entities) {
    renderer.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    entities.forEach((entity) => {
        renderer.ctx.save()
        if (entity.Position) renderer.ctx.translate(entity.Position.x, entity.Position.y)
        renderer.ctx.drawImage(entity.Sprite, 0, 0)
        renderer.ctx.restore()
    })
}
