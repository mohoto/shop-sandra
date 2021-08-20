import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql ` 
    query {
        products {
            id
            name,
            price
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql ` 
    query($name: String!) {
        category(name: $name) {
            products {
                id,
                name,
                price,
                filter,
                category{
                    name
                }
            }
        }
    }
`

export const GET_PRODUCT = gql `
    query($id: String!) {
        product(id: $id) {
            id,
            name,
            price
        }
    }
`;

export const ADD_USER = gql ` 
    mutation(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $imageProfileUrl: String!,
        $googleId: String!) {
            addUser(
                firstName: $firstName,
                lastName: $lastName,
                email: $email,
                imageProfileUrl: $imageProfileUrl,
                googleId: $googleId) {
                    _id,
                    firstName
                }
    }
`; 

export const GET_USERS = gql`
    query{
        users {
            email
        }
    }
`
