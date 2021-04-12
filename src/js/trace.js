function trace()
{
    var address = document.getElementById('trace-address').value;
    var hope = document.getElementById('hope').value;
    var console = document.getElementById('console');

    if(address != ""){
        console.innerText = ">tracert -h" + hope + " " + address + "\n\n Выполняется запрос...";

        const { exec } = require("child_process");

        exec("chcp 65001 & tracert -h " + hope + " " + address, (error, stdout, stderr) => {
            if(error){
                console.innerHTML = error.message;
            }
            if(stderr){
                console.innerHTML = stderr;
            }
            if(stdout){
                console.innerText = ">tracert -h" + hope + " " + address +"\n" + stdout;
            }
        });
    } else {
        console.innerText = "Адрес трасеровки не указан!";
    }
}

