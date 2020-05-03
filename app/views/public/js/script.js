function onOff() {
    document.querySelector("#modal").classList.toggle("hide");
}

function checkFields(event) {
    const fieldsToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link"
    ]

    let isEmpty = fieldsToCheck.find(function(value) {
        if(!event.target[String(value)].value.trim())
            return true;
    });

    if(isEmpty) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos");
    }
}