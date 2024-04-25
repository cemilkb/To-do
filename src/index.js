import '../dist/output.css'
import { formatDistance, format, differenceInCalendarDays } from "date-fns"
import { deneme } from './modules/newTask'
import { newProject } from './modules/newProject'

const newTaskBtn = document.getElementById("new-task")
const newProjectBtn = document.getElementById("new-project-btn")
const dialog = document.querySelector("dialog")

newTaskBtn.addEventListener("click", () => {
    console.log("asşdlk")
    dialog.innerHTML = ""
    deneme(dialog)
    dialog.showModal()
})

newProjectBtn.addEventListener("click", () => {
    console.log("asşdlk")
    dialog.innerHTML = ""
    newProject(dialog)
    dialog.showModal()
})