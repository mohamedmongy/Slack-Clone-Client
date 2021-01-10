import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Header , Input, Button, Message } from 'semantic-ui-react'
import { useMutation, gql } from '@apollo/client';

 function Register(props) {

    const registerUser = gql`
        mutation register($name: String,$email: String,$password: String) {
            register(name: $name, email: $email,password: $password) {
                ok
                errors {
                    path
                    message
                }
            }
        }
    `;

    const [register] = useMutation(registerUser);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const onSubmit = async () => {
       try {
        const res = await register({ variables: { name: name, email: email, password: password } }); 
        const  { ok , errors} = res.data.register
        if (ok) {
            props.history.push('/')
        } else {
            alert(errors[0].message)
        }
        // console.log(` the result ${ JSON.stringify(res.data.register.errors)}`)
       } catch {
        alert( `please try again some thing went wrong`)
       }
    }

    return (
            <Container text>
                <Header as='h2'> Register New Account </Header>
                <Input onChange={ (e) => { setName(e.target.value) } } value= {name}  placeholder='name' />
                <Input onChange={ (e) => { setEmail(e.target.value)}} value= {email} placeholder='email' />
                <Input onChange={ (e) => { setPassword(e.target.value)}} value= {password} type="password" placeholder='password'/>
                <Button onClick={ onSubmit }> Submit </Button>         
            </Container>
        )
  }

  export default Register