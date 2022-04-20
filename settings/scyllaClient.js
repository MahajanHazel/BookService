"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
const cassandra = __importStar(require("cassandra-driver"));
const index_1 = require("./index");
const SCYLLA = Object.assign({ contactPoints: process.env.f_scylla_host
        ? [process.env.f_scylla_host]
        : index_1.settings.SCYLLA.contactPoints, localDataCenter: process.env.f_scylla_local_datacenter || index_1.settings.SCYLLA.localDataCenter }, (process.env.f_scylla_username && process.env.f_scylla_password
    ? {
        credentials: {
            username: process.env.f_scylla_username,
            password: process.env.f_scylla_password,
        },
    }
    : {}));
exports.scyllaClient = new cassandra.Client(SCYLLA);
