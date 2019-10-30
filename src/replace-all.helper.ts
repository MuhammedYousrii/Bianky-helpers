/**
 * 
 * @summary Replace all words that match the search value with replacement value
 * 
 * @param {string} text 
 * @param {string} search 
 * @param {string} replacement 
 * 
 * @example replaceAll("abc bca abc", "bc", 'ms') // "ams msa ams"
 * 
 * @return {string}
 * 
 * 
 * @note This helper didn't give you the best performance for better performance you can use @method replaceAllRegExp
 *
 */
export function replaceAll(text: string, search: string, replacement: string): string {
    return text.split(search).join(replacement);
};


/**
 * 
 * @summary Replace all words that match the search value with replacement value
 * 
 * @param {string} text 
 * @param {string} search 
 * @param {string} replacement 
 * 
 * 
 * @example replaceAllRegExp("abc bca abc", "bc", 'ms') // "ams msa ams"
 * @return {string}
 */
export function replaceAllRegExp(text: string, search: string, replacement: string): string {
    return text.replace(new RegExp(search, 'g'), replacement);
}