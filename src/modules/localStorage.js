
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


localStorage.setItem("ananzo", JSON.stringify(all))
localStorage.setItem("b", JSON.stringify(b))

let local = localStorage

let localKey = []

function keyUpdate() {
    localKey = []
    for (let k in local) {

        if (k != "length" && k != "getItem" && k != "removeItem"
            && k != "key" && k != "setItem" && k != "clear") {
            localKey.push(k)
        }

    }
}

export { local , keyUpdate, localKey}