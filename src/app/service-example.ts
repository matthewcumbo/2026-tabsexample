import { Service } from '@angular/core';

@Service()
export class ServiceExample {

    public student = {
        name:"Joe",
        surname:"Borg",
        age:99
    };

    public list = ['asdf','qwerty'];

    select(selection:number){
        return this.list[selection];
    }
}
