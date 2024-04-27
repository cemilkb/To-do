
import { local } from "./localStorage"

function addTask(task, due, summary, priority, project) {

    if (task.value != "" && due.value != "" && summary.value != "" && priority.value != "" && project.value != "") {
        // Getting a wich project
        let projects = JSON.parse(local[`${project.value}$$`])
        let newTasks = projects.tasks
        let pass = true

        // Error
        newTasks.forEach(e => {
            console.log(e.task)
            if (e.task === task.value) {
                pass = false
            }
        });

        if (pass == true) {
            // Create Task For Project
            let createdTask = {
                task: task.value,
                isDone: false,
                summary: summary.value,
                due: due.value,
                priority: priority.value
            }

            newTasks.push(createdTask)
            let deneme = {
                name: projects.name,
                color: projects.color,
                tasks: newTasks
            }

            localStorage.setItem(`${project.value}$$`, JSON.stringify(deneme))

            console.log(newTasks)

            task.value = ""
            due.value = ""
            summary.value = ""
            priority.value = ""
            project.value = ""
        } else {
            // Error Alert
            alert("Bu görev hali hazırda bulunmakta.")
        }

    } else {
        alert("alanlar dolddurulmalı")
    }

}

export { addTask }