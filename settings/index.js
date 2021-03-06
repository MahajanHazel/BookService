"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const local = __importStar(require("./local"));
const properties = __importStar(require("./properties"));
const env = process.env.f_stage || "local";
exports.settings = env == "local" ? local.settings : properties.settings;
