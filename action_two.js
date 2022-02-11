import { Process } from "./next/process.js";


export class ActionTwo extends Process {
    execute(){
        setTimeout(()=>{
            console.log(this.pl)            
        },5000)
    }

}