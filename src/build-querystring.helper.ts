/**
 * 
 * @name buildQueryString
 * @summary Format Js object into querystring.
 * @param {object} queries - Queries object to format.
 * 
 * @example buildQueryString({ category: 'phones', region: 'egypt})
 * 
 * @return { string } query
 */

export function buildQueryString(queries: object): string | void {
    // tslint:disable-next-line: curly
    if (typeof queries !== 'object') return console.warn('BuildQueryString Helper accepts objects only');
    const QueryKeys = Object.keys(queries);
    let queryString = '?';

    QueryKeys.forEach((key: string, index: number) => {
        // tslint:disable-next-line: curly
        if (queries[key])
            queryString += `${key}=${queries[key]}${QueryKeys.length === (index + 1) ? '': '&'}`;
    })
    return queryString;
}