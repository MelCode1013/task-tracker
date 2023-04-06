import { Task } from "../Task"
//below the 'Task[]' is the set type for TASKS. the [] after Task is because each object is in the array.
export const TASKS: Task[]  = [
    {
        id: 1,
        text: 'Call Doctor',
        day: 'Sept 5th at 2pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Give Oliver a bath',
        day: 'Sept 6th at 8am',
        reminder: true,
    }
]