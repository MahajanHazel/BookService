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
const elasticsearch_1 = require("@elastic/elasticsearch");
// export const esClient: Client = new Client({
// 	node: process.env.f_es_host
// 		? `${process.env.f_es_host}:${process.env.f_es_port}`
// 		: settings.ELASTIC.contactPoints,
// });
function getElasticSearchClient(additionalClientOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        // const url = `${elasticSearchHost}`;
        const url = 'http://localhost:9200';
        console.log(url + " [ES] Connecting");
        const client = new elasticsearch_1.Client(Object.assign({ node: url }, additionalClientOptions));
        try {
            yield client.ping();
            console.log(url + " [ES] Successfully connected");
        }
        catch (ex) {
            console.log(url + " [ES] Error connecting");
        }
        return client;
    });
}
exports.getElasticSearchClient = getElasticSearchClient;
