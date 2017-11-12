import React, {Component} from 'react';
//or we can do it as this:
//const Component = React.Component;

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render() {
        return (<input onChange={(event) => console.log(event.target.value)} />);
    }

}
export default SearchBar;
