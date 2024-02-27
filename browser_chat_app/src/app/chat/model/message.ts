export enum Type {
    "text",
    "test"
}

export class Message {
    username: string;
    type: Type;
    content: string;

    constructor(username: string, type: Type, content: string) {
        this.username = username;
        this.type = type;
        this.content = content;
    }
}
