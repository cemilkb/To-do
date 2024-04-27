function addProject(pName, pColor) {
    if (pName.value != "") {

        let pass = true

        // Error
        for (let a in localStorage) {
            
            if (a == `${pName.value}$$`) {
                pass = false
            }

        }

        if (pass == true) {
            console.log("Geçti")
            let newProject = {
                name: pName.value,
                color: pColor.value,
                tasks: []
            }

            let deneme = `${pName.value}$$`

            localStorage.setItem(deneme, JSON.stringify(newProject))
        } else {
            console.log("kaldı")
            alert("Bu proje var.")
        }

    } else {
        alert("BU İSİM KABUL EDİLMEMEKTEDİR!!!")
    }
    pName.value = ""
}

export { addProject }