"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const properties_1 = require("../../../settings/properties");
const kafka = new kafkajs_1.Kafka({
    brokers: [`${process.env.f_kafka_host}:${process.env.f_kafka_port}`] || properties_1.settings.KAFKA.BROKERS
});
exports.createKafkaTopic = (tenantId) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = kafka.admin();
    yield admin.connect();
    yield admin.createTopics({
        topics: [
            {
                topic: `my-topic`,
                numPartitions: 1,
                replicationFactor: 3
            },
        ],
    });
    yield admin.disconnect();
});
