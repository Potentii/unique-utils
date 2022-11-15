/**
 * @template T
 * @abstract
 * @package
 */
export default class Generator{


    constructor() {
    }


    /**
     * @abstract
     * @protected
     * @return {T}
     */
    generateNewValue(){}



    /**
     *
     * @param {string} uniqueFieldName The name of the field that have the value to be checked against
     * @param {*[]} items
     * @param {number} [maxAttempts=0]
     * @return {?T}
     */
    generateAgainstList(uniqueFieldName, items = [], maxAttempts = 0){
        let newValue;
        let attempts = 0;
        do{
            if(maxAttempts !== 0 && maxAttempts <= attempts)
                return null;

            newValue = this.generateNewValue();
            attempts++;
        } while ((maxAttempts === 0 || maxAttempts > attempts) && items.some(item => item[uniqueFieldName] == newValue));
        return newValue;
    }


    /**
     *
     * @param {Map<T,*>} map
     * @param {number} [maxAttempts=0]
     * @return {?T}
     */
    generateAgainstMap(map, maxAttempts = 0){
        let newKey;
        let attempts = 0;
        do{
            if(maxAttempts !== 0 && maxAttempts <= attempts)
                return null;

            newKey = this.generateNewValue();
            attempts++;
        } while ((maxAttempts === 0 || maxAttempts > attempts) && map.has(newKey));
        return newKey;
    }


    /**
     *
     * @param {Set<T>} set
     * @param {number} [maxAttempts=0]
     * @return {?T}
     */
    generateAgainstSet(set, maxAttempts = 0){
        let newKey;
        let attempts = 0;
        do{
            if(maxAttempts !== 0 && maxAttempts <= attempts)
                return null;

            newKey = this.generateNewValue();
            attempts++;
        } while ((maxAttempts === 0 || maxAttempts > attempts) && set.has(newKey));
        return newKey;
    }


    /**
     *
     * @param {(value:T) => boolean} hasIdPredicate A predicate that informs if the value has already been taken
     * @param {number} [maxAttempts=0]
     * @return {?T}
     */
    generateAgainstPredicate(hasIdPredicate, maxAttempts = 0){
        let newValue;
        let attempts = 0;
        do{
            if(maxAttempts !== 0 && maxAttempts <= attempts)
                return null;

            newValue = this.generateNewValue();
            attempts++;
        } while ((maxAttempts === 0 || maxAttempts > attempts) && hasIdPredicate.call(null, newValue));
        return newValue;
    }
}