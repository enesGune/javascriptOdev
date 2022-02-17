import { Process } from "./next/process.js";


export class ActionTwo extends Process {
    execute(){
        setTimeout(()=>{
            console.log(this.pl)
            this.actionPL.status = true;
            this.actionPL.data = this.pl      
            this.sucsess();
        },500)
    }

}