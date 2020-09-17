import React, {Component} from 'react';

class ListDisplay extends Component {
    render(){
        console.log(this.props)
        return (
            <section>
                <h2>{this.props.todo}</h2>
            </section>
        )
    }
}

export default ListDisplay;