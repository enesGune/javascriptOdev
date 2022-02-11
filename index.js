import { ActionOne } from "./action_one.js";
import { ActionTwo } from "./action_two.js";

let process1 = new ActionOne({id:0})
let process2 = new ActionOne({id:1})
let process3 = new ActionOne({id:2})

let process4 = new ActionTwo({id:3})
let process5 = new ActionTwo({id:4})
let process6 = new ActionTwo({id:5})

process1.execute();
process2.execute();
process3.execute();
process4.execute();
process5.execute();
process6.execute();
