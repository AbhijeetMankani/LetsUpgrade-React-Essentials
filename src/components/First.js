import React, {Component} from 'react';

export default class First extends Component {

	constructor(props){
		super(props);

		this.state={
			name:'Abhijeet',
			age:"16"
		}

		console.log(this.props);
	}

	// printDetail(arg){ // Called on button click
	// 	console.log(this.props.name, arg);
	// }

	changeName(event){
		this.setState({name:event.target.value});
		console.log(event.target.value);
	}
	changeAge(event){
		this.setState({age:event.target.value});
		console.log(event.target.value);
	}

	OnButtonClick(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then((users)=>{
			console.log(users);
		})
		.catch((error)=>{console.log(error);})
	}

	render(){
		return(
			<div>
			<h1>{this.state.name}, {this.state.age}</h1>

			<input placeholder={this.state.name} type="text" onChange={(event)=>this.changeName(event)}></input>
			<input placeholder={this.state.age} type="text" onChange={(event)=>this.changeAge(event)}></input>

			<button onClick={()=>this.OnButtonClick()}>Click</button>


			</div>
		)
	}

}