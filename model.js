export default class Model {
    constructor() {
        this.count = 0;
    }

    increase() {
        this.count += 1;
    }

    decrease() {
        this.count -= 1;
    }
}