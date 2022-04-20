import { Kafka } from "kafkajs";
import { settings } from "../../../settings/properties";

const kafka = new Kafka({
	brokers: [`${process.env.f_kafka_host}:${process.env.f_kafka_port}`] || settings.KAFKA.BROKERS
});

export const createKafkaTopic = async (tenantId: string) => {
	const admin = kafka.admin();
	await admin.connect();
	await admin.createTopics({
		topics: [
			{
				topic: `my-topic`,
				numPartitions: 1,
				replicationFactor: 3
			},
		],
	});
	await admin.disconnect();
};
