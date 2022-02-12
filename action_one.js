import { Process } from "./next/process.js";

export class ActionOne extends Process {
    finishAllObject;
    execute(){
        setTimeout(()=>{
            console.log(this.pl)
            this.sucsess();
            if(this.finishAllObject){
                this.finishAllObject()      

            }
        },500)
    }

}