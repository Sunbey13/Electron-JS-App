function ping()
{
    var inputPing = document.getElementById('ping').value;
    var console = document.getElementById('console');

    if(inputPing != ""){
        console.innerText = ">ping " + inputPing + "\n\n Выполняется запрос...";
        const { exec } = require("child_process");

        exec("chcp 65001 & ping " + inputPing, (error, stdout, stderr) => {
            if(error){
                console.innerHTML = error.message;
            }
            if(stderr){
                console.innerHTML = stderr;
            }
            if(stdout){
                console.innerText = ">ping " + inputPing +"\n" + stdout;
            }
        });
    } else {
        console.innerText = "Адрес хоста не указан!";
    }
}

