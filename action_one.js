import { Process } from "./next/process.js";

export class ActionOne extends Process {
    execute(){
        console.log(this.pl)
    }
}