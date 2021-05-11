import React, {Component} from 'react';
import Card from './Card';

export default class Users_Cards extends Component {

	constructor(props){
		super(props);

		this.state={
			users:[],
			bothFilterUsers:[]
		}
		
		this.nameFilterUsers=[];
		this.cityFilterUsers=[];
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then((users)=>{
			this.setState({users:users});
			this.nameFilterUsers=users;
			this.cityFilterUsers=users;
			this.setState({bothFilterUsers:users});
		})
		.catch((error)=>{console.log(error);})
	}


	netFilter(){
		let tempUsers = this.nameFilterUsers.filter((user)=>{
			return this.cityFilterUsers.includes(user);
		})
		this.setState({bothFilterUsers:tempUsers});
	}

	filterUsersByName(value){
		if(value){
			this.nameFilterUsers = this.state.users.filter((user)=>{
				return user.name.toLowerCase().includes(value.toLowerCase());
			}) 
		}else{this.nameFilterUsers=this.state.users;}
		// console.log(tempUsers);
		this.netFilter();
	}
	filterUsersByCity(value){
		if(value){
			this.cityFilterUsers = this.state.users.filter((user)=>{
				return user.address.city.toLowerCase().includes(value.toLowerCase());
			}) 
			// console.log(tempUsers);
		}else{this.nameFilterUsers=this.state.users}
		this.netFilter();
	}

	render(){
		return(
			<div>

				<div>
					<input type="search" placeholder="Search By Name" onChange={(event)=>this.filterUsersByName(event.target.value)}></input>
				</div>
				<div>
					<input type="search" placeholder="Search By City" onChange={(event)=>this.filterUsersByCity(event.target.value)}></input>
				</div>
			
			{
				this.state.bothFilterUsers.map((user, index)=>{
					return(
						// <div className="card">
						// 	<h2>{user.name}</h2>
						// 	<div className="cardBody">
						// 		<p>Username:	{user.username}</p>
						// 		<p>Email:		{user.email}</p>
						// 		<p>Company:		{user.company.name}</p>
						// 		<p>Website:		{user.website}</p>
						// 		<p>City:		{user.address.city}</p>
						// 	</div>
						// </div>
						<Card user={user} key={index}></Card>
					)
				})
			}

			</div>
		)
	}

}