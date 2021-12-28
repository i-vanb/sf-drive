export interface Message {
    fromId: number,
    toId: number,
    toUsername: string,
    toEmail: string,
    subject: string,
    carId: number,
    text: string,
    date: string,
    chat_id: string
}
