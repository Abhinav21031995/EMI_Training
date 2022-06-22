export class Employee
{
    id:number;
    name:string;
    location:string;
    gender:string;
    isActive: boolean;

    constructor(id:number,name:string,location:string,gender:string,isActive:boolean)
    {
        this.id=id;
        this.name=name;
        this.location=location;
        this.gender=gender;
        this.isActive=isActive;
    }
}