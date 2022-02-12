export class Process {
    pl;
    next;
    prev;
    doneSignal = new Signal()
    constructor (pl) {
        this.pl = pl
    }
    execute() {
        throw new Error("not execute!")
    }
 // ------ next -------
    addNext(cmd){
        this.next = cmd;
        cmd.prev = this;
        return this.next
    }
 // ------- done ------ 
    sucsess() {
        if(this.next){
            this.next.execute();
        }
    }
 // ------- kick --------
    out(){
        this.first().execute();
    }
 // ------ first --------
    first(){
        if(this.prev){
            return this.prev.first();
        }else{
            return this;
        }
    }
}