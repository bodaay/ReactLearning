import React, {Component} from 'react';
//or we can do it as this:
//const Component = React.Component;

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render() {
        return (
        <div>
        <input value = {this.state.term} onChange={event => this.setState({term: event.target.value})} />
        {/* <br />Value of the input: {this.state.term} */}
        </div>
    );
    }

}
export default SearchBar;
