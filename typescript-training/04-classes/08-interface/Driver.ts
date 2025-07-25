import { Coach } from "./Coach";
import { CrickedCoach } from "./CrickedCoach";
import { GolfCoach } from "./GolfCoach";

let myCrickedCoach = new CrickedCoach();
console.log(myCrickedCoach.getDailyWorkout()); // Practice fast bowling for 30 minutes.


let myGolfCoach = new GolfCoach();
console.log(myGolfCoach.getDailyWorkout()); // Practice putting for 30 minutes.