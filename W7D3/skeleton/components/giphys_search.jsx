import React from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    return (event => this.setState({ searchTerm: event.currentTarget.value }));
  }

  handleClick() {

    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm).then( () =>
      this.setState({ searchTerm: "" }));
  }

  render () {
    return (
      <div>
        <form>
          <input
            type="text"
            name="searchTerm"
            onChange={this.handleChange()}
            value={this.state.searchTerm}/>
          <input
            type="button"
            onClick={this.handleClick}
            value="Search" />
        </form>
        <div>
          <GiphysIndex giphys = {this.props.giphys}/>
        </div>
      </div>
    );
  }

}

export default GiphysSearch;
