import { Coach } from "./Coach";

export class CrickedCoach implements Coach{

    getDailyWorkout(): string {
        return "Practice fast bowling for 30 minutes.";
    }
}