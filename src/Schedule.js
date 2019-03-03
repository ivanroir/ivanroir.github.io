import React from "react";
import {
    withStyles,
    Grid,
    Paper,
    Typography
} from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
});

class Schedule extends React.Component {
    render() {
        const { location } = this.props
        const tile = location.state;

        return (
            <React.Fragment>
                <Grid container spacing={24} justify={"center"} alignItems={"center"}>
                    <Grid item xs={12}>
                        <img src={tile.img} alt="Mount Maynoba" height="100%" width="100%" />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ height: "50vh", width: "100%", backgroundColor: "#ffb347" }} >
                            <Grid container spacing={16}>
                                <Grid item xs={12}>
                                    <Typography variant="body2">{tile.title}</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="caption">Trial Difficulty {tile.difficulty}/10</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="caption">{tile.masl} MASL</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                <Typography variant="body1">Features: {tile.features}</Typography>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment >
        );
    }
}

export default withStyles(styles, { withTheme: true })(Schedule);