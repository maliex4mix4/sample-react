import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return (
            <div>
                <img style={{width:"100%", height: "85vh"}} src="images/404page.jpg" />
                <h4 style={{textAlign:"center"}}>Ops! Look like you dialed the wrong page</h4>
                <p style={{textAlign:"center", color: "blue"}}><Link to="/" style={{color: "blue"}}>Go Back Home</Link></p>
            </div>
        );
    }
}
export default NotFoundPage;