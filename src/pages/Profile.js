import React from 'react';
import axios from 'axios';
import { Container, Row, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            username: this.props.username,
            email: this.props.email
        }
    }

    fetchUserDetails=(username)=>{
        //console.log(username);
        axios.get("http://localhost:3000/api/v1/users" + username,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({username:res.data.results[0].username})
        })
        .catch(err=>console.log(err))
    }

    UpdateProfileHandler=(e)=>{
        e.preventDefault();
        //create object of form data
        const formData=new FormData();
        formData.append("email",this.state.email);
        formData.append("username",this.state.username);

        //update-profile
        axios.put("http://localhost:5000/userapi/update-profile/",formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
           this.setState({msg:res.data.message});
           this.setState({profileImage:res.data.results.profileImage});
        })
        .catch(err=>console.log(err))
    }


    componentDidMount(){
     this.fetchUserDetails(this.state.user_id);
    }

    render(){

        return (
            <Container>
            <Row>
            
                <h1>User Profile</h1>
                <Form className="form">     
        
                <Form.Group controlId="formCategory1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.username}/>
                
                </Form.Group>
                <Form.Group controlId="formCategory2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={this.state.email} />
                
                </Form.Group>
                
                <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
            </Form>


        </Row>
        </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        id: state.id,
        username: state.username,
        email: state.email
    }
}
     
export default connect(mapStateToProps)(Profile);