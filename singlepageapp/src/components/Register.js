import React from 'react';
import './mystyle.css';

class Register extends React.Component{

	constructor() {
		super();
	
		this.state={
		 fullname: '',
		 email : '',
		 password : '',
		 confirmpassword: '',
		 value : ''
		}
	}
	
	updateState = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		this.setState({[name]:value})
	}
	
	registerdata = (event) => {
		alert('Hello Register!');
		event.preventDefault();
		console.log(this.state);
		localStorage.setItem('this.state',JSON.stringify(this.state));
	}
	


    render(){
        return(
            <div>
            
<div className="container">
<br></br>  

<hr/>
<div className="card bg-light">
<article className="card-body mx-auto" >
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	<p className="text-center">Get started with your free account</p>

	<p className="divider-text">
        <span className="bg-light">OR</span>
    </p>
	<form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input onChange={this.updateState} name="fullname" className="form-control" placeholder="Full name" type="text"/>
    </div> 

    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input onChange={this.updateState} name="email" className="form-control" placeholder="Email address" type="email"/>
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
		</div>
		<select name="value" onChange={this.updateState} className="form-control">
			<option selected="select"> Select job type</option>
			<option value="Designer">Designer</option>
			<option value="Manager">Manager</option>
			<option value="Accounting">Accounting</option>
		</select>
	</div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input onChange={this.updateState} name="password" className="form-control" placeholder="Create password" type="password"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input onChange={this.updateState} name="confirmpassword" className="form-control" placeholder="Repeat password" type="password"/>
    </div>                                       
    <div className="form-group">
        <button onClick={this.registerdata} type="submit" className="btn btn-primary btn-block"> Create Account  </button>
    </div>       
    <p className="text-center">Have an account?</p>                                                                 
</form>
</article>
</div>

</div> 
            </div>
        )
    }
}

export default Register;