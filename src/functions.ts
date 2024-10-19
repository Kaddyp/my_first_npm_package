import { SayHelloProps } from "./types";
export function tsHello( { firstName, lastName }: SayHelloProps) {
    console.log('Hello!');
    console.log(`My name is ${firstName} ${lastName}`);
}