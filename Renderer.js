export let renderer = {}

renderer.render = function (entity) {
    renderer.ctx.drawImage(entity.Sprite, entity.Position.x, entity.Position.y)
}
