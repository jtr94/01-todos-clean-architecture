export class Todo {
  constructor(
    public id      : number,
    public text    : string,
    public category: string[],
    public createdAt: Date,
    public completedAt?: Date | null,
  ) {}

  get isCompleted(){
    return !! this.completedAt;    
  }
}
