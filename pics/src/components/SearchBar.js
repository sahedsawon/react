import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            term : ''
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

   onSubmitForm(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
   }

    render() {
        return (
            <form name="searcgFrom" className="form-horizontal" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="term"> Search...</label>
                    <input type="text" id="term" name="term" className="form-control"
                    value={this.state.term}
                    onChange={ e => this.setState({term : e.target.value}) } />
                </div>
            </form>
        )
    }
}