import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkout(): string {
        return "Practice putting for 30 minutes.";
    }
}
