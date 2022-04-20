/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as cassandra from "cassandra-driver";
import { settings } from "./index";

const SCYLLA: cassandra.DseClientOptions = {
	contactPoints: process.env.f_scylla_host
		? [process.env.f_scylla_host]
		: settings.SCYLLA.contactPoints,
	localDataCenter:
		process.env.f_scylla_local_datacenter || settings.SCYLLA.localDataCenter,
	...(process.env.f_scylla_username && process.env.f_scylla_password
		? {
				credentials: {
					username: process.env.f_scylla_username,
					password: process.env.f_scylla_password,
				},
		  }
		: {}),
};
export const scyllaClient = new cassandra.Client(SCYLLA);