const log4js = require("log4js");
log4js.configure({
    appenders: { log: { type: "file", filename: "file-log.log" } },
    categories: { default: { appenders: ["log"], level: "info" } }
});

const logger = log4js.getLogger("TRECERT");

var console = document.getElementById('console');

function trace()
{
    logger.info("Button tracert clicked.");
    
    var address = document.getElementById('trace-address').value;
    var hope = document.getElementById('hope').value;

    if(address != "" && hope != ""){
        logger.info("The request is being executed. Addres: "+ address +". Hope: "+ hope +".");
        tracert();
    } else {
        console.innerText = "Адрес трасеровки не указан!";
        logger.error("Host address not specified.");
    }
}

function tracert(){
    var address = document.getElementById('trace-address').value;
    var hope = document.getElementById('hope').value;

    console.innerText = ">tracert -h" + hope + " " + address + "\n\n Выполняется запрос...";
    const { exec } = require("child_process");
    exec("chcp 65001 & tracert -h " + hope + " " + address, (error, stdout, stderr) => {
        if(error){
            console.innerHTML = error.message;
            logger.error(error.message);
        }
        if(stderr){
            console.innerHTML = stderr;
            logger.error(stderr);
        }
        if(stdout){
            console.innerText = ">tracert -h" + hope + " " + address +"\n" + stdout;
            logger.info("Request completed.");
        }
    });
}

function log(){
    logger.info("Page loaded.");
}

window.onload = log();

