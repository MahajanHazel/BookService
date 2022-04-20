"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
exports.settings = {
    SCYLLA: {
        contactPoints: ["127.0.0.1"],
        localDataCenter: "datacenter1",
    },
    ELASTIC: {
        contactPoints: ["http://localhost:9200"],
        BOOK_ID_INDEX: "book_id",
        NAME_INDEX: "name",
        QTY_INDEX: "qty"
    },
    KAFKA: {
        BROKERS: ["localhost:9092"],
        SSL: {
            cert: ""
        },
        LOG_LEVEL: kafkajs_1.logLevel.DEBUG,
        CONNECT_RETRIES: 5,
    }
};
