
export class UpdateTodoDto{
    constructor(
        public readonly id      : number,
        public readonly text?   : string,
        public readonly completedAt?: Date ){
        
    }

    get values() {
        const getObjValues : { [key: string] : any} = {};

        if(this.text) getObjValues.text = this.text;
        if(this.completedAt) getObjValues.newDate = this.completedAt;

        return getObjValues;
    }
    
    static create( props:{ [key: string] : any}= {}): [string | undefined, UpdateTodoDto | undefined] {

        const {id, text, completedAt} = props;
        let newDate;

        if (!id || isNaN (Number(id))) return ['Must provide a valid id', undefined];

        if (completedAt) {
            newDate = new Date(completedAt);
            if (newDate.toString() === 'Invalid Date'){
                return ['Must provide a valid date', undefined];
            }
        } 

        return [undefined, new UpdateTodoDto(id, text, newDate)];               
    }
}