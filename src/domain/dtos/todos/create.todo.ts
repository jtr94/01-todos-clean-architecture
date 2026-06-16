
export class CreateTodoDTO {
  constructor(
    public text: string,
    public category?: string[],
  ) {}

  static create(args: {[key : string]:any} ):[string?, CreateTodoDTO?] {
    const {text, category} = args;
    if(!text) return ['Must provide a text in the body\'s request']; 
    return [,new CreateTodoDTO(text, category)];
  }
}
