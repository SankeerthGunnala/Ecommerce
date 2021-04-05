import React from 'react';
import './mystyle.css';
import axios from 'axios';
class Login extends React.Component{
    
    
	constructor() {
		super();
	
		this.state={
		 email : '',
		 password : ''
		//  confirmpassword: '',
		//  value : ''
		}
	}
	
	updateState = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		this.setState({[name]:value})
	}
	
	logindata = (event) => {
		alert('Hello Login!');
		event.preventDefault();
		console.log(this.state);
		localStorage.setItem('Data',JSON.stringify(this.state));
		axios.post('http://localhost:15890/user/register',this.state).then(
			response => {
				console.log(response);
				if(response.data.token){
					this.props.history.push("/dashboard")
				}
			},
			error => {
				console.log(error);
			}
		)
	}
	
    
    render(){
        return(
            <div>
            <div className="container">
<br></br>  

<hr/>
<div className="card bg-light">
<article className="card-body mx-auto" >
	<h4 className="card-title mt-3 text-center">Login</h4>
	
	<form>
	 <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input onChange={this.updateState} name="email" className="form-control" placeholder="Email" type="email"/>
    </div>
    
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input onChange={this.updateState} name="password" className="form-control" placeholder="password" type="password"/>
    </div> 
                                           
    <div className="form-group">
        <button onClick={this.logindata} type="submit" className="btn btn-primary btn-block"> Login </button>
    </div>       
    <p className="text-center">Create account?</p>                                                                 
</form>
</article>
</div>

</div>

            
            </div>
        )
    }
}

export default Login;