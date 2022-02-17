export default class Signal {
    // handlers = [];
    _handlers;
    get handlers(){
        if(!this._handlers) this._handlers = [];
        return this._handlers
    }
    // set handlers(val){
    //     this._handlers=val;
    // }
    register(handler) {
        if (this.handlers.includes(handler)) {
            throw new Error("event eroro")
        } else {
            this.handlers.push(handler);

        }
    }

    unregister(handler){
        if (this.handlers.includes(handler)) {
            this.handlers.splice(this.handlers.indexOf(handler),1)
        }
    }

    dispatch(pl) {
        this.handlers.forEach((handler) => {
            handler(pl);
        })
        // if(!this.handler)return;
        // this.handler()

    }
}


export class SignalFirst extends Signal {
    dispatch(pl){
        super.dispatch(pl);
        this.kill();
    }
    kill(){
        this._handlers = null
    }
}