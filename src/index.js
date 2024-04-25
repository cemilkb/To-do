import '../dist/output.css'
import { formatDistance, format } from "date-fns"
import { getir } from './modules/addLocal'

(

    function deneme() {

        const newTask = document.getElementById("new-task")
        const dialog = document.querySelector("dialog")


        const form = document.createElement("form")
        const taskLabel = document.createElement("label")
        const taskInput = document.createElement("input")
        const cD = document.createElement("button")
        const add = document.createElement("button")

        label.textContent = "Task:"
        cD.textContent = "Close"
        cD.style.backgroundColor = "red"
        add.textContent = "Add Task"

        form.appendChild(label)
        form.appendChild(input)

        dialog.appendChild(form)
        dialog.appendChild(cD)
        dialog.appendChild(add)

        newTask.addEventListener("click", () => {
            dialog.showModal()
        })

        cD.addEventListener("click", () => {
            dialog.close()
        })

        add.addEventListener("click", () => {
            alert(input.value)
        })

    }

)()

