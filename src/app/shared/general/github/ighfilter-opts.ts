/**
 * Github filter & sorting options for REST API
 */
export interface IGHFilterOpts {
    page?: number;
    type?: string;
    per_page?: number;
    sort?: string;
}
