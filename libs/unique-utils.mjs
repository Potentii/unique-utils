import UuidGenerator from "./generators/uuid-generator.mjs";

const Generators = {
    /**
     * @type {UuidGenerator}
     */
    uuid: new UuidGenerator(),
}


/**
 * Uniqueness utilities
 */
export default class UniqueUtils{

    /**
     *
     * @return {UuidGenerator}
     */
    get uuid(){
        return Generators.uuid;
    }

}