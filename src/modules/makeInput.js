function createInput(id, type, name) {

    const label = document.createElement("label")
    const input = document.createElement("input")
    const div = document.createElement("div")

    div.classList.add("flex", "flex-col")
    label.textContent = `${name}:`
    input.setAttribute("type", type)
    input.setAttribute("id", id)
    input.classList.add("rounded")

    div.appendChild(label)
    div.appendChild(input)

    return [div, input]
}

export { createInput }