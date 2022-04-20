import { Kafka } from "kafkajs";
import { settings } from "../../../settings/local";
const kafka = new Kafka({
	brokers: settings.KAFKA.BROKERS,
	// ssl: settings.KAFKA.SSL
});

export class KafkaProducer {

	async produce(message: Buffer, topicName: string): Promise<any> {
		const producer = kafka.producer();
		await producer.connect();
		await producer.send({
			topic: topicName,
			messages: [
				{ value: message },
			],
		});
	}
}