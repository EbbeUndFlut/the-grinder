export let ressourceLoader = {}

let textures = []

ressourceLoader.addTexture = function (url) {
    let img = new Image()
    img.src = url
    textures.push(img)
    return textures.length - 1
}

ressourceLoader.getTexture = function (index) {
    return textures[index]
}
