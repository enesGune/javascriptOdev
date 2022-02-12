export default class Signal {
    handler;
    register(handler){
        this.handler = handler;
    }
    dispatch(){
        if(!this.handler)return;
        this.handler()

    }
}