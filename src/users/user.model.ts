import * as moongose from 'mongoose';

export const UserSchema = new moongose.Schema({
    name: String,
    email: String,
    password: String,
});

export interface User extends moongose.Document {
    name: string;
    email: string;
    password: string;
}