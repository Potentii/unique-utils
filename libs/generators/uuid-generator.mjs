import * as uuid from "uuid";
import Generator from "./generator.mjs";

/**
 * @extends {Generator<string>}
 * @package
 */
export default class UuidGenerator extends Generator{

	constructor() {
		super();
	}

	generateNewValue() {
		return uuid.v4();
	}

}