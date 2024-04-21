/* eslint-disable react/prop-types */
import React from "react";
import "semantic-ui-css/semantic.min.css";

class SearchBar extends React.Component {
  state = {term: ''}
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
         <form className="ui form " onSubmit={this.onFormSubmit}>
        <div className="field">
          <label htmlFor="">Search Videos</label>
          <input type="text" name="video" id="video" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
        </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;
