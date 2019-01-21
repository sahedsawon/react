import React,{Component} from 'react';
import reactDOM from 'react-dom ';

class FormContainer extends Component {
	constructor() {
		super();
		this.state({
			title : ''
		});
	}
	render() {
		return(
			<form id="article-form">
			</form>
		)
	}
}