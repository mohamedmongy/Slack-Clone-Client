import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Header , Input, Button } from 'semantic-ui-react'
import { useMutation, gql } from '@apollo/client';




 function Register() {


    const registerUser = gql`
        mutation register($name: String,$email: String,$password: String) {
            register(name: $name, email: $email,password: $password) 
        }
    `;

 const [register, { data }] = useMutation(registerUser);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const onSubmit = async () => {
      const res =  await register({ variables: { name: name, email: email, password: password } });
      console.log(res.data)
    }

    return (
            <Container text>
             <Header as='h2'>Register</Header>
                <Input onChange={ (e) => { setName(e.target.value) } } value= {name}  placeholder='name' />
                <Input onChange={ (e) => { setEmail(e.target.value)}} value= {email} placeholder='email' />
                <Input onChange={ (e) => { setPassword(e.target.value)}} value= {password} type="password" placeholder='password'/>
                <Button onClick={ onSubmit }> Submit </Button>            
            </Container>
        )
    
  }

  export default Register