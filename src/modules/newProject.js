import { createInput } from "./makeInput"
import { addProject } from "./addProject"

function newProject(d) {

    const dialog = d

    // Create Element
    const form = document.createElement("form")

    const name = createInput("name-input", "text", "Name")
    const color = createInput("p-color", "color", "Color")

    const buttonDiv = document.createElement("div")
    const cD = document.createElement("button")
    const add = document.createElement("button")

    // Dialog

    dialog.classList.add("bg-emerald-500/[.50]", "p-10", "rounded")

    // Form 

    form.classList.add("grid", "grid-cols-2", "gap-10")

    // Dialog Btn
    buttonDiv.classList.add("flex", "gap-10", "justify-center", "mt-10")

    cD.textContent = "Close"
    cD.classList.add("border-2", "rounded-full", "px-3", "py-1", "hover:scale-110")
    add.textContent = "Add"
    add.classList.add("border-2", "rounded-full", "px-3", "py-1", "hover:scale-110")

    // Append Section

    form.appendChild(name[0])
    form.appendChild(color[0])

    buttonDiv.appendChild(cD)
    buttonDiv.appendChild(add)

    dialog.appendChild(form)
    dialog.appendChild(buttonDiv)

    // Event Listener Section
    cD.addEventListener("click", () => {
        dialog.classList.remove("bg-emerald-500/[.50]")
        dialog.close()
    })

    add.addEventListener("click", () => {
        // Project Add To Local Storage
        // Name, Color
        addProject(name[1], color[1])

    })

}

export { newProject }