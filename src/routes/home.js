import React from 'react';
import ReactDOM from 'react-dom';
import { useQuery, gql } from '@apollo/client';

const allUsersQuery = gql`
  query allUsers {
   allUsers {
    id
    name
    email
  }
}`;

function AllUsers() {
    const { loading, error, data } = useQuery(allUsersQuery);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.allUsers.map
    ( user => {
       return(<h1 key={user.id}> {user.name}, {user.email} </h1>);
    })
  }

  export default AllUsers;





