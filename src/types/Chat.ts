import { ChatMessage } from "./ChatMessate";

export type Chat = {
    id: string;
    title: string;
    messages: ChatMessage[]
}