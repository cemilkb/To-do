function addProject(pName, pColor) {
    if (pName.value != "length" && pName.value != "getItem" && pName.value != "removeItem"
        && pName.value != "key" && pName.value != "setItem" && pName.value != "clear" && pName.value != "") {

        let newProject = {
            name: pName.value,
            color: pColor.value,
            tasks: []
        }

        localStorage.setItem(pName.value, JSON.stringify(newProject))
    } else {
        alert("BU İSİM KABUL EDİLMEMEKTEDİR!!!")
    }
    pName.value = ""
}

export { addProject }