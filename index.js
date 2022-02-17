import { ActionOne } from "./action_one.js";
import { ActionTwo } from "./action_two.js";

let process1 = new ActionOne({id:0})
let process2 = new ActionOne({id:1})
let process3 = new ActionOne({id:2})

let process4 = new ActionTwo({id:3})
let process5 = new ActionTwo({id:4})
let process6 = new ActionOne({id:1})



process1.addNext(process2).addNext(process3).addNext(process6).addNext(process4).addNext(process5)

process1.out()




var finish = function(pl){
    console.log("finish")
}

var finishMy = function(pl){
    console.log("my"+pl)
    process4.last().doneSignal.unregister(finishMy)
}

process4.doneSignal.register(finish)
process4.doneSignal.register(finishMy)
process4.last().doneSignal.register(finish)
//24 :00