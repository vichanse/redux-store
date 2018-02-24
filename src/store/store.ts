export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [Key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        this.state = initialState;
    }

    get value() {
        return this.state;
    }
}