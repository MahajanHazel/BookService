import * as local from "./local";
import * as properties from "./properties";

const env = process.env.f_stage || "local";

export const settings =
	env == "local" ? local.settings : properties.settings;

