import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    }
  }

  updateKey = (val) => {
    const { onGetResult } = this.props;
    this.setState({
      searchVal: val
    });
    onGetResult(val);

  };

  render() {
    const { searchVal } = this.state;
    return (
      <input placeholder="Search Support" type="text" value={searchVal} onChange={(evt) =>this.updateKey(evt.target.value)}/>
    )
  }
}


export default SearchBar;