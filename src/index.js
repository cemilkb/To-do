import '../dist/output.css'
import { formatDistance, format, differenceInCalendarDays } from "date-fns"
import { newTask } from './modules/newTask'
import { newProject } from './modules/newProject'
import { keyUpdate } from './modules/localStorage'

const newTaskBtn = document.getElementById("new-task")
const newProjectBtn = document.getElementById("new-project-btn")
const dialog = document.querySelector("dialog")

newTaskBtn.addEventListener("click", () => {
    keyUpdate()
    dialog.innerHTML = ""
    newTask(dialog)
    dialog.showModal()
})

newProjectBtn.addEventListener("click", () => {
    dialog.innerHTML = ""
    newProject(dialog)
    dialog.showModal()
})



