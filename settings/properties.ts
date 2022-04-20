import { logLevel } from "kafkajs";
import fs from "fs";
export const settings = {
	
	SCYLLA: {
		contactPoints: [""],
		localDataCenter: "",
	},
	ELASTIC: {
		contactPoints: "",
		BOOK_ID_INDEX:"book_id",
		NAME_INDEX:"name",
		QTY_INDEX:"qty"
	
	},
	KAFKA: {
		BROKERS: process.env.f_kafka_bootstrap_servers ? process.env.f_kafka_bootstrap_servers.split(",") : [""],
		// SSL: {
		// 	cert: fs.readFileSync("/usr/opt/app/cert.pem", "utf-8")
		// },
		LOG_LEVEL: logLevel.DEBUG,
		CONNECT_RETRIES: 5,
		GROUP_ID: "book-service",
	},
	LOGGER: {
		LOG_LEVEL: "debug",
		FILE_NAME: "logs/combined.log"
	}
};

