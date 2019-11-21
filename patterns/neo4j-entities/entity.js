/**
 * A self-assigning base class, Entity, for Neo4j Nodes
 * Or any self-serving class for that matter...
 */

class Entity {
    constructor(...props) {
        if (props) {
            Object.assign(this, ...props)
        }
    }
}

module.exports = Entity