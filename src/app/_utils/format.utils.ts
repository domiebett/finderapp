export class FormatUtils {
    
    /**
     * Formats Url params
     * 
     * @param params - object with url parameter key value pairs
     */
    static formatParams(params: object = {}) {
        const formattedParams = [];

        for (const key of Object.keys(params)) {
            formattedParams.push(`${key}=${params[key]}`);
        }

        return formattedParams.length <= 0 ?
            '' : `?${formattedParams.join('&')}`;
    }
}
