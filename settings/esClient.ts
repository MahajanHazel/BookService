import { Client } from "@elastic/elasticsearch";
import { settings } from "./index";

// export const esClient: Client = new Client({
// 	node: process.env.f_es_host
// 		? `${process.env.f_es_host}:${process.env.f_es_port}`
// 		: settings.ELASTIC.contactPoints,
// });

export async function getElasticSearchClient(
	additionalClientOptions?: any
) {
	// const url = `${elasticSearchHost}`;
	const url='http://localhost:9200';
	console.log(url + " [ES] Connecting");
	const client = new Client({ node: url, ...additionalClientOptions });
	try {
		await client.ping();
		console.log(url + " [ES] Successfully connected");
	} catch (ex) {
		console.log(url + " [ES] Error connecting");
	}
	return client;
}