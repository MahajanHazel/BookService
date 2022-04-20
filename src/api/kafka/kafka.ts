import { Kafka } from "kafkajs";
import { settings } from "../../../settings/properties";

export const KafkaCore: Kafka = new Kafka({
	brokers: settings.KAFKA.BROKERS,
	// ssl: settings.KAFKA.SSL,
	// logLevel: settings.KAFKA.LOG_LEVEL,
	retry: {
		retries: settings.KAFKA.CONNECT_RETRIES,
	},
});