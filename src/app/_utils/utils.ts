export class Utils {
    static formatParams(params: object = {}) {
        const formattedParams = [];

        for (const key of Object.keys(params)) {
            formattedParams.push(`${key}=${params[key]}`);
        }

        return formattedParams.length <= 0 ?
            '' : `?${formattedParams.join('&')}`;
    }
}
