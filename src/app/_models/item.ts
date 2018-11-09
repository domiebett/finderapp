import { User } from './user';
import { Image } from './file';

export interface Item {
    id: number;
    name: string;
    description: string;
    category: string;
    images: Image[];
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
