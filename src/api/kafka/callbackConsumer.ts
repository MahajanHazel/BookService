import { Kafka } from "kafkajs";
import { settings } from "../../../settings/index";
import { EsRegistry } from "../../core/esregistry";
// import { callbackTopicName } from "../api/constants";
// import { sendAPIRequest } from "../api/utils";
// import logger from "../utils/logger";

const kafka = new Kafka({
	brokers: settings.KAFKA.BROKERS,
	// ssl: settings.KAFKA.SSL
});

const topicName = "my-topic";
const consumerNumber = "1";
const esregister : EsRegistry =new EsRegistry();
// export class BatchKafkaConsumer {

const processConsumer = async () => {
	// logger.info("Starting callback kafka consumer");

	const batchConsumer = kafka.consumer({ groupId: "BooksEntity" });
	await Promise.all([
		batchConsumer.connect()
	]);

	await Promise.all([
		await batchConsumer.subscribe({ topic: topicName })
	]);

	await batchConsumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			if (message.value != null) {
				const kafkaMessage = JSON.parse(message.value.toString());
				// logger.debug(`batchConsumer#${consumerNumber}`, topic, partition, kafkaMessage);
                console.log(kafkaMessage);
				console.log("Inserted");

              
		        esregister.esupdate(kafkaMessage);
				// console.log()
				// const callbackDetails = JSON.parse(kafkaMessage.callback);

				
			}
		},
	});
};

export default processConsumer;