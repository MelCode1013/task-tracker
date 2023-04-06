export interface Task {
    id?: number //the ? makes the id optional
    text: string;
    day: string;
    reminder: boolean;
}