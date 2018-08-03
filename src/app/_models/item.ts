import { User } from './user';

export interface Item {
    id: number;
    name: string;
    description: string;
    category: string;
    finder?: User;
    owner?: User;
    found: boolean;
    dateCreated?;
    dateUpdated?;
}

export enum ItemType {
    Found = 'FOUND',
    Lost = 'LOST'
}
