import { logLevel } from "kafkajs";


export const settings = {
	SCYLLA: {
		contactPoints: ["127.0.0.1"],
		localDataCenter: "datacenter1",
	},
	ELASTIC: {
		contactPoints: ["http://localhost:9200"],
		BOOK_ID_INDEX:"book_id",
		NAME_INDEX:"name",
		QTY_INDEX:"qty"
	
	},
	KAFKA: {
		BROKERS: ["localhost:9092"],
		SSL: {
			cert: ""
		},
		LOG_LEVEL: logLevel.DEBUG,
		CONNECT_RETRIES: 5,
		
	}

};
