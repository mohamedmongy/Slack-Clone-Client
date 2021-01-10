import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Header , Input, Button } from 'semantic-ui-react'
import { useMutation, gql } from '@apollo/client';

 function LoginComp(props) {

    const loginUser = gql`
        mutation login($email: String!,$password: String!) {
            login(email: $email, password: $password) {
            ok
            token
            refreshToken
            errors {
                path
                message
             }
         }
        }
    `;

    const [login] = useMutation(loginUser);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const onSubmit = async () => {
       try {
        console.log(email, password)
        const res = await login({ variables: { email: email, password: password } }); 
        // console.log(` the result ${ JSON.stringify(res)}`)
        const  { ok, token, refreshToken , errors} = res.data.login
        if (ok) {
            // props.history.push('/')
            localStorage.setItem("token", token)
            localStorage.setItem("refreshToken", refreshToken)
        } else {
            alert(errors[0].message)
        }
       } catch {
        alert( `please try again some thing went wrong!!!!!!`)
       }
    }

    return (
            <Container text>
                <Header as='h2'> Login To your account  </Header>
                <Input onChange={ (e) => { setEmail(e.target.value)}} value= {email} placeholder='email' />
                <Input onChange={ (e) => { setPassword(e.target.value)}} value= {password} type="password" placeholder='password'/>
                <Button onClick={ onSubmit }> login </Button>         
            </Container>
        )
  }

  export default LoginComp