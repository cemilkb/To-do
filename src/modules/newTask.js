import { createInput } from "./makeInput"
function deneme(d) {

    const dialog = d

    // Create Element
    const form = document.createElement("form")

    const task = createInput("task-input", "text", "Task")
    const due = createInput("due", "date", "Due")
    const summary = createInput("task", "text", "Summary")
    const priority = createInput("task", "text", "Priorty")
    const project = createInput("task", "text", "Project")

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

    cD.addEventListener("click", () => {
        dialog.close()
    })

    add.addEventListener("click", () => {
        let taskInput = task[1].value
        let dueInput = due[1].value
        let summaryInput = summary[1].value
        let priorityInput = priority[1].value
        let projectInput = project[1].value


        console.log(`${taskInput} - - ${dueInput} - - ${summaryInput} - - ${priorityInput} - - ${projectInput} `)

    })

}

export { deneme }