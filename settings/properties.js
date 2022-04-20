"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
exports.settings = {
    SCYLLA: {
        contactPoints: [""],
        localDataCenter: "",
    },
    ELASTIC: {
        contactPoints: "",
        BOOK_ID_INDEX: "book_id",
        NAME_INDEX: "name",
        QTY_INDEX: "qty"
    },
    KAFKA: {
        BROKERS: process.env.f_kafka_bootstrap_servers ? process.env.f_kafka_bootstrap_servers.split(",") : [""],
        // SSL: {
        // 	cert: fs.readFileSync("/usr/opt/app/cert.pem", "utf-8")
        // },
        LOG_LEVEL: kafkajs_1.logLevel.DEBUG,
        CONNECT_RETRIES: 5,
        GROUP_ID: "book-service",
    },
    LOGGER: {
        LOG_LEVEL: "debug",
        FILE_NAME: "logs/combined.log"
    }
};
