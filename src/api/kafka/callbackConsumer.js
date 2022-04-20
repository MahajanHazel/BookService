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
const index_1 = require("../../../settings/index");
const esregistry_1 = require("../../core/esregistry");
// import { callbackTopicName } from "../api/constants";
// import { sendAPIRequest } from "../api/utils";
// import logger from "../utils/logger";
const kafka = new kafkajs_1.Kafka({
    brokers: index_1.settings.KAFKA.BROKERS,
});
const topicName = "my-topic";
const consumerNumber = "1";
const esregister = new esregistry_1.EsRegistry();
// export class BatchKafkaConsumer {
const processConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    // logger.info("Starting callback kafka consumer");
    const batchConsumer = kafka.consumer({ groupId: "BooksEntity" });
    yield Promise.all([
        batchConsumer.connect()
    ]);
    yield Promise.all([
        yield batchConsumer.subscribe({ topic: topicName })
    ]);
    yield batchConsumer.run({
        eachMessage: ({ topic, partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            if (message.value != null) {
                const kafkaMessage = JSON.parse(message.value.toString());
                // logger.debug(`batchConsumer#${consumerNumber}`, topic, partition, kafkaMessage);
                console.log(kafkaMessage);
                console.log("Inserted");
                esregister.esupdate(kafkaMessage);
                // console.log()
                // const callbackDetails = JSON.parse(kafkaMessage.callback);
            }
        }),
    });
});
exports.default = processConsumer;
