const log4js = require("log4js");
log4js.configure({
    appenders: { log: { type: "file", filename: "file-log.log" } },
    categories: { default: { appenders: ["log"], level: "info" } }
});

const logger = log4js.getLogger("AROUND");

function log(){
    logger.info("Page loaded.");
}

window.onload = log();