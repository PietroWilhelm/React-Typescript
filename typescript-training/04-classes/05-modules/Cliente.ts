class Cliente {
    // constructor with parameter properties
    constructor( private _firstName: string,  private _lastName: string){
    }
   
    //getters and setters
    public set firstName(value:string){
        this._firstName = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set lastName(value:string){
        this._lastName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
}

export default Cliente;