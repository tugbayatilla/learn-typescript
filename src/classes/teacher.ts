import {Person} from "./index";

export class Teacher extends Person {
    // to enable reminder of 'override' keyword, we need to enable in tsconfig 'noImplicitOverride:true'
    // if you do not use override, this setting will warn you.
    override get fullName(): string {
        return 'Professor ' + super.fullName
    };
}