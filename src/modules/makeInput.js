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

function createSelect(name) {
    const label = document.createElement("label")
    const select = document.createElement("select")
    const div = document.createElement("div")

    div.classList.add("flex", "flex-col")
    label.textContent = `${name}:`
    select.classList.add("rounded")

    div.appendChild(label)
    div.appendChild(select)

    return [div, select]
}


export { createInput, createSelect }