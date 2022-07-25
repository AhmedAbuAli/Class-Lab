import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render(){
        return <>
        <HornedBeast title='Horned Beast 1' imageUrl='https://images.unsplash.com/photo-1614029362896-abd39216179d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9ybmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' description='This is a Description' />
        <HornedBeast title='Horned Beast 2' imageUrl='https://images.unsplash.com/photo-1638117919075-f9723b95b81c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80' description='This is a Description' />
        </>
    }
}

export default Main