import React from 'react';


class SearchBar extends React.Component{
    state = {term:''};
    
    inputValueChanged = (event) =>{
        this.setState({term:event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui context">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" placeholder="China is Bokachodaa!!"
                            value={this.state.term}
                            onChange={this.inputValueChanged}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;