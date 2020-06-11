import React from 'react';

class SearchBar extends React.Component {
    state = {
        term:''
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value});

    };

    onFormSubmit = (event) => {
        event.preventDefault();
       
        this.props.onFormSubmit(this.state.term);
    };
    render() {
      return (
        <div className="search-bar ui segment">
            <form className="ui form"
            onSubmit={this.onFormSubmit}>
                <div className="field" style={{paddingTop:'40px'}}>
                <label>
                    <span style={{fontSize:'50px'}}>YOU</span> 
                    <span style={{fontSize:'50px'}}>TUBE</span></label>
                <input type="text" 
                value={this.state.term} 
                onChange={this.onInputChange}
                style={{border:'2px solid black'}}/>
                <button style={{fontSize:'20px', cursor:'pointer',padding:'20px', borderRadius:'1.5rem', backgroundColor:'red'}}
                 onClick={this.onFormSubmit}>Search</button>
                </div>
            </form>
        </div>
      );
    }
}

export default SearchBar;