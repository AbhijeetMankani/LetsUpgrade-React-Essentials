import React, {Component} from 'react';

export default class Users_Table extends Component {

	constructor(props){
		super(props);

		this.state={
			users:[],
			filterUsers:[]
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then((users)=>{
			this.setState({users:users});
			this.setState({filterUsers:users});
		})
		.catch((error)=>{console.log(error);})
	}

	filterUsers(name){
		let tempUsers = this.state.users.filter((user)=>{
			return user.name.toLowerCase().includes(name.toLowerCase());
		})
		// console.log(tempUsers);
		this.setState({filterUsers:tempUsers});
	}


	render(){
		return(
			<div className="container">				
				<div>
					<input type="search" placeholder="Search By Name" onChange={(event)=>this.filterUsers(event.target.value)}></input>
				</div>
			<table>
				<thead>
					<th>Sr No.</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Comapny</th>
					<th>Website</th>
					<th>City</th>	
				</thead>
				<tbody>
					{
						this.state.filterUsers.map((user, index)=>{
							return(
								<tr key={index}>
									<td>{index+1}</td>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.company.name}</td>
									<td>{user.website}</td>
									<td>{user.address.city}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>

			</div>
		)
	}

}