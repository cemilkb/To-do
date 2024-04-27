
// Local storage

let all = {
    name: "a",
    color: "red",
    tasks: [{
        task: "görev",
        isDone: false,
        summary: "mözet",
        due: "02/02/2022",
        priority: "Medium"
    },
    {
        task: "görev2",
        isDone: true,
        summary: "özet",
        due: "22/22/2222",
        priority: "Hard"
    }]
}

let b = {
    name: "b",
    color: "red",
    tasks: [{
        task: "görev",
        isDone: false,
        summary: "mözet",
        due: "02/02/2022",
        priority: "Medium"
    }]
}


localStorage.setItem("denemes$$", JSON.stringify(all))
localStorage.setItem("deneme$$$", JSON.stringify(b))

let local = localStorage
var regex = /\w*\$\$\w*/g;
let localKey = []

function keyUpdate() {
    localKey = []
    for (let k in local) {

        if (regex.test(k)) {
            localKey.push(k)
        }

    }
}

export { local , keyUpdate, localKey}