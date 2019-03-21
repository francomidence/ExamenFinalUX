import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Link from "react-router-dom/Link";


class ComponentHome extends Component{
    constructor(props){
        super(props);
        this.state={
            Title: 'Bienvenido',
            Title2: 'Weather App'
        }
    }
    
    
    changeMessage =(event)=>{
        if(this.state.check === false){
            this.setState({check: true});
        }else{
            this.setState({check: false});
        }
    }
    render(){
        var tUp =()=>{return(
        <div>
        <h1>{this.state.Title}</h1> 
        <h2>{this.state.Title2}</h2> 
        </div>
        )
        }        
        var tDown =()=> {
            return(
            <div>
            <h2>{this.state.Title2}</h2>
            <h1>{this.state.Title}</h1> 
            </div> 
        )
        }
        return(
            <div>
                    <div>
                        {this.state.check?
                            tUp():tDown()
                        }
                    </div>
                <form>
                        <Button variant="contained" onClick={this.changeMessage.bind(this)}>Click Me!</Button>
                        <div>
                       
                    <ul>
                            <Link to="/weather/March/20">Weather for March 20</Link>
                            <br></br>
                            <Link to="/weather/March/21">Weather for March 21</Link>
                            <br></br>
                            <Link to="/weather/March/22">Weather for March 22</Link>
                            <br></br>
                            <Link to="/weather/March/23">Weather for March 23</Link>
                    </ul>
                    </div>
                </form>
            </div>
        );
    }
}

export default ComponentHome;