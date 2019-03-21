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
  import DeleteIcon from "@material-ui/icons/Delete";
  import ACTIONS from "../modules/action";
  import { connect } from "react-redux";

  class ComponentWeather extends Component {
    render() {
      return (
        <div className="App">
        <h1>The Weather</h1>
        
        </div>
      );
    }
  }
  
  export default ComponentWeather;