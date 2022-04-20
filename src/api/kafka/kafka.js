"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const properties_1 = require("../../../settings/properties");
exports.KafkaCore = new kafkajs_1.Kafka({
    brokers: properties_1.settings.KAFKA.BROKERS,
    // ssl: settings.KAFKA.SSL,
    // logLevel: settings.KAFKA.LOG_LEVEL,
    retry: {
        retries: properties_1.settings.KAFKA.CONNECT_RETRIES,
    },
});
