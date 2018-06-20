export class TaskDto {
    public id:string;
    public key:string;
    public name:string;
    public description:string;

    public constructor(init?:Partial<TaskDto>) {
        Object.assign(this, init);
    }
}
