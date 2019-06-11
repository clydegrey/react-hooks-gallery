import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  // onInputChange(e) {
  //   this.setState({ value: e.target.value });
  // }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label htmlFor="searchbar">Doctor Search</label>
          <input
            className="field"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            name="searchbar"
            id="searchbar"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
