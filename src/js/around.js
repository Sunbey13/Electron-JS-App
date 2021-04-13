function systeminfo ()
{
    var ip = require('ip');
    var console = document.getElementById('console');
    var myIp_1 = ip.address().split(".")[0];
    var myIp_2 = ip.address().split(".")[1];
    var myIp_3 = ip.address().split(".")[2];
    var fullIp = myIp_1 + "." + myIp_2 + "." + myIp_3 + "." + "255";

    const { exec } = require("child_process");

    exec("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c cd p:\test && command netsh interface ipdelete arpcache'\"", (error, stdout, stderr) => {
        if(error){
            console.innerText = error.message;
        }
        if(stderr){
            console.innerText = stderr;
        }
        if(stdout){
            console.innerText = "Устройства в сети:\n" + stdout;
        }
    });
    
    exec("chcp 65001 & ping " + fullIp + " & arp -a", (error, stdout, stderr) => {
        if(error){
            console.innerText = error.message;
        }
        if(stderr){
            console.innerText = stderr;
        }
        if(stdout){
            console.innerText = "\nУстройства в сети:\n" + "My IP: " + ip.address() + "\n" + stdout;
        }
    });
}
window.onload = systeminfo();