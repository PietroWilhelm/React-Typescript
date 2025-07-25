"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrickedCoach_1 = require("./CrickedCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCrickedCoach = new CrickedCoach_1.CrickedCoach();
console.log(myCrickedCoach.getDailyWorkout()); // Practice fast bowling for 30 minutes.
let myGolfCoach = new GolfCoach_1.GolfCoach();
console.log(myGolfCoach.getDailyWorkout()); // Practice putting for 30 minutes.
