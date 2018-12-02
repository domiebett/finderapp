export interface User {
    id: number;
    userName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    location?;
    dateCreated?;
    dateUpdated?;
}
