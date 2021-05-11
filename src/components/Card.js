import React, {Component} from 'react';

export default class Users_Cards extends Component {

	constructor(props){
		super(props);

		this.state={
			user:this.props.user
		}
	}

	render(){
		return(
			
			<div className="card">
				<h2>{this.state.user.name}</h2>
				<div className="cardBody">
					<p>Username:	{this.state.user.username}</p>
					<p>Email:		{this.state.user.email}</p>
					<p>Company:		{this.state.user.company.name}</p>
					<p>Website:		{this.state.user.website}</p>
					<p>City:		{this.state.user.address.city}</p>
				</div>
			</div>
		)
	}

}