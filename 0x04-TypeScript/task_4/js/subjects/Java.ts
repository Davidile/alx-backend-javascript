/// <reference path="Teacher.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subjects {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }

            return 'No available teacher';
        }
    }
}
