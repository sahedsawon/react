import React from 'react';

export default class SearchBar extends React.Component {
    state = {term : ''}
    onChangeTerm = event => {
        this.setState({term:event.target.value})
    }
    render() {
        return(
            <form className="form-horiz">
                <div className="form-group">
                    <label htmlFor="term">Search videos</label>
                    <input type="text" id="term" name="term"
                    value={this.state.term}
                    onChange={this.onChangeTerm} 
                    placeholder="Type..." className="form-control"  />
                </div>
            </form>
        )
    }
}