import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


class Login extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <div style={{ height: "100vh", backgroundColor: "#FFB347" }}>
                    <Grid container alignItems={"center"} justify={"center"} style={{ height: "100% " }} >
                        <Grid container item xs={10} alignItems={"center"} justify={"center"} spacing={24}>
                            <Grid item xs={12} >
                                <TextField
                                    label="User Name"
                                    variant="outlined"
                                    value={this.state.username}
                                    onChange={this.handleChange("username")}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    value={this.state.password}
                                    onChange={this.handleChange("password")}
                                    fullWidth
                                />
                            </Grid>
                            <Grid container item xs={12} justify={"center"}>
                                <Link to="/Home" >
                                    <Button variant="contained" style={{ width: "200px" }}>
                                        Login
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment >
        );
    }
}

export default Login;