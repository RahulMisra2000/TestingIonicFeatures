export class Menu {
    
    constructor(private _desc: string, private _link: string){}

    get desc(){
        return this._desc;
    }

    get link(){
        return this._link;
    }

}
