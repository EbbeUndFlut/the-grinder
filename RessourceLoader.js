let ressourceLoader = {
    textures: [],
}

ressourceLoader.addTexture = function (url) {
    let img = new Image()
    img.src = url
    ressourceLoader.textures.push(img)
    return ressourceLoader.textures.length - 1
}

ressourceLoader.getTexture = function (index) {
    return ressourceLoader.textures[index]
}

export default ressourceLoader
