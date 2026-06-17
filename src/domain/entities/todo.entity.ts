export class Todo {
  constructor(
    public id          : number,
    public text        : string,
    public category    : string[],
    public createdAt   : Date,
    public completedAt?: Date | null,
  ) {}

  get isCompleted(){
    return !! this.completedAt;    
  }

  static fromObj(args : {[key:string]:any}): Todo {
    const {id, text, category, createdAt, completedAt} = args;
    let newDate;

    if (!id || isNaN (Number(id))) throw 'Must provide a valid id';
    if (!text) throw 'Must have a text';
    if (!category) throw 'Must have at least one category';
    if (completedAt) {
        newDate = new Date(completedAt);
        if (newDate.toString() === 'Invalid Date'){
            throw 'Must provide a valid date';
        }
    }
  
    return new Todo(id, text,category, createdAt, completedAt)
  }
}
