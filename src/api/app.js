"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./books/router"));
const cors_1 = __importDefault(require("cors"));
const callbackConsumer_1 = __importDefault(require("./kafka/callbackConsumer"));
const app = express_1.default();
const port = 5000;
app.use(cors_1.default());
app.use(express_1.default.json());
app.listen(port, function () {
    console.log('Connected successfully on port' + port);
});
app.use("/", router_1.default);
callbackConsumer_1.default();
