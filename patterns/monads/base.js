export default class Base {
    // equals :: # M a -> M a -> boolean
    equals = (x) => this.toString() === x.toString()
}