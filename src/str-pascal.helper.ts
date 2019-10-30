/**
 * 
 * @name strPascalHelper
 * @summary Capitalize first char of every single word in text.
 * @param { string } text
 * @return  {string}
 * 
 * @example ||-------- strPascalHelper(" hello world") ------> "Hello World"
 * 
 * @note Important note to mention that function will trim passed text
 */
export default function strPascalHelper (text: string): string {
    return text.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
