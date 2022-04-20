// import { Client, ClientOptions } from "@elastic/elasticsearch";
// import { settings } from "../../../settings";

// const elasticSearchHost = process.env.ELASTIC_SEARCH_HOST ?
// 	`${process.env.ELASTIC_SEARCH_PROTOCOL}://${process.env.ELASTIC_SEARCH_HOST}:${process.env.ELASTIC_SEARCH_PORT}` :
// 	settings.ELASTIC.contactPoints;

// export async function getElasticSearchClient(
// 	additionalClientOptions?: ClientOptions
// ) {
// 	const url = `${elasticSearchHost}`;
// 	//logger.debug(url + " [ES] Connecting");
// 	const client = new Client({ node: url, ...additionalClientOptions });
// 	try {
// 		await client.ping();
// 		//logger.debug(url + " [ES] Successfully connected");
// 	} catch (ex) {
// 		//logger.error(url + " [ES] Error connecting");
// 	}
// 	return client;
// }
// export async function ElasticSearchClient() {
// 	// const awsCredentials = await awsGetCredentials();
// 	// const AWSConnection = createAWSConnection(awsCredentials);
// 	const client = getElasticSearchClient({});
// 	return client;
// }
// export async function esSetup() {

// 	try {
// 		const client = await ElasticSearchClient();
// 		client.indices.create({
// 			index: settings.ELASTIC.BOOK_ID_INDEX + process.env.f_stage
// 		});

// 		client.indices.create({
// 			index: settings.ELASTIC.NAME_INDEX + process.env.f_stage
// 		});

// 		client.indices.create({
// 			index: settings.ELASTIC.QTY_INDEX + process.env.f_stage
// 		});

// 	}
// 	catch (e: any) {
// 		logger.error("Error while creating indices for elasticsearch " + e);
// 	}
// }
