const Entity = require('./entity');

class Person extends Entity {
    constructor(props) {
        super(props)
        this.name = props.name
        this.dob = props.dob || '8/7/1989'
        this.extra = "I'm an extra property."    
    }
}

module.exports = Person