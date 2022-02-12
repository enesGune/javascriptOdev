import { Process } from "./next/process.js";


export class ActionTwo extends Process {
    execute(){
        setTimeout(()=>{
            console.log(this.pl)      
            this.sucsess();
            this.doneSignal.dispatch();      
        },500)
    }

}