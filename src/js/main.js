function systeminfo ()
{
var console = document.getElementById('console');
const { exec } = require("child_process");
exec("chcp 65001 & systeminfo ", (error, stdout, stderr) => {
    if(error){
        console.innerHTML = error.message;
    }
    if(stderr){
        console.innerHTML = stderr;
    }
    if(stdout){
        console.innerText = "Информация о системе:\n" + stdout;
    }
});
}
window.onload = systeminfo();