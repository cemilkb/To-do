import { createInput, createSelect } from "./makeInput"
import { localKey } from "./localStorage"
import { addTask } from "./addTask"

function newTask(d) {

    const dialog = d

    // Create Element
    const form = document.createElement("form")

    const task = createInput("task-input", "text", "Task")
    const due = createInput("due", "date", "Due")
    const summary = createInput("task", "text", "Summary")

    const priority = createSelect("Priorty")
    const project = createSelect("Project")

    const buttonDiv = document.createElement("div")
    const cD = document.createElement("button")
    const add = document.createElement("button")

    // Dialog

    dialog.classList.add("bg-red-500/[.50]", "p-10", "rounded")

    // Form 

    form.classList.add("grid", "grid-cols-2", "gap-10")

    // Dialog Btn
    buttonDiv.classList.add("flex", "gap-10", "justify-center", "mt-10")

    cD.textContent = "Close"
    cD.classList.add("border-2", "rounded-full", "px-3", "py-1", "hover:scale-110")
    add.classList.add("border-2", "rounded-full", "px-3", "py-1", "hover:scale-110")
    add.textContent = "Add"

    project[0].classList.add("col-span-2", "w-[50%]", "m-auto")

    // Options For Projects

    function option(value) {
        const option = document.createElement("option")
        option.setAttribute("value", value)
        option.textContent = value

        return option
    }

    for (let i = 0; i < localKey.length; i++) {
        project[1].appendChild(option(JSON.parse(localStorage[`${localKey[i]}`]).name))
    }

    // Options For Priorty

    priority[1].appendChild(option("High"))
    priority[1].appendChild(option("Medium"))
    priority[1].appendChild(option("Low"))

    // Append Section

    form.appendChild(task[0])
    form.appendChild(due[0])
    form.appendChild(summary[0])
    form.appendChild(priority[0])
    form.appendChild(project[0])

    buttonDiv.appendChild(cD)
    buttonDiv.appendChild(add)

    dialog.appendChild(form)
    dialog.appendChild(buttonDiv)

    // Event Listener

    cD.addEventListener("click", () => {
        dialog.classList.remove("bg-red-500/[.50]")
        dialog.close()
    })

    add.addEventListener("click", () => {
        let taskInput = task[1].value
        let dueInput = due[1].value
        let summaryInput = summary[1].value
        let priorityInput = priority.value
        let projectInput = project.value

        // Task, Due, Sumamry, Priorty, Project
        addTask(task[1], due[1], summary[1], priority[1], project[1])
        console.log(localKey)
    })

}

export { newTask }