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
const local_1 = require("../../../settings/local");
const kafka = new kafkajs_1.Kafka({
    brokers: local_1.settings.KAFKA.BROKERS,
});
class KafkaProducer {
    produce(message, topicName) {
        return __awaiter(this, void 0, void 0, function* () {
            const producer = kafka.producer();
            yield producer.connect();
            yield producer.send({
                topic: topicName,
                messages: [
                    { value: message },
                ],
            });
        });
    }
}
exports.KafkaProducer = KafkaProducer;
