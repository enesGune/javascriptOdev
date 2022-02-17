import SignalFirst from "../signal/signal.js"

export class Process {
    pl;
    next;
    prev;
    actionPL = new actionPL();
    // doneSignal = new Signal()
    _doneSignal;
    get doneSignal() {
        if (!this._doneSignal) this._doneSignal = new SignalFirst();
        return this._doneSignal;
    }
    constructor(pl) {
        this.pl = pl
    }
    execute() {
        throw new Error("not execute!")
    }
    // ------ next -------
    addNext(cmd) {
        this.next = cmd;
        cmd.prev = this;
        return this.next
    }
    // ------- done ------ 
    sucsess() {
        if (this.next) {
            this.next.execute();
        }
        if(this._doneSignal){
            this.doneSignal.dispatch(this.actionPL);      

        }
    }
    // ------- kick --------
    out() {
        this.first().execute();
    }
    // ------ first --------
    first() {
        if (this.prev) {
            return this.prev.first();
        } else {
            return this;
        }
    }
    last(){
        if(this.next){
            return this.next.last();
        }else{
            return this;
        }
    }
}

export class actionPL{
    status;
    data;
}