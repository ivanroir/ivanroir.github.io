import React from 'react';
import classNames from 'classnames';
import {
    withStyles,
    Drawer,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
} from '@material-ui/core';

import {
    Menu as MenuIcon,
    ChevronRight as ChevronRightIcon,
    ChevronLeft as ChevronLeftIcon,
    AccountCircle,
    Payment,
    LocalOffer,
    Share,
    Help,
    Settings,
    Info,
    LocationOn
} from '@material-ui/icons';

import { Route, BrowserRouter as Router } from "react-router-dom";

import ListArea from "./ListArea.js";
import Schedule from "./Schedule.js";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    paper: {
        background: "#FFB347"
    },
    inline: {
        display: 'inline',
    },
    gridList: {
        width: "99%",
        height: "85vh",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


class Home extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar style={{ color: "#000", backgroundColor: "#ffa500" }}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <TextField fullWidth />
                        <LocationOn />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        },
                            classes.paper),

                    }}
                    open={this.state.open}

                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><AccountCircle /></ListItemIcon>
                            <ListItemText primary={"PROFILE"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Payment /></ListItemIcon>
                            <ListItemText primary={"PAYMENT"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><LocalOffer /></ListItemIcon>
                            <ListItemText primary={"PROMOTIONS"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Share /></ListItemIcon>
                            <ListItemText primary={"SHARE"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><Help /></ListItemIcon>
                            <ListItemText primary={"HELP"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Settings /></ListItemIcon>
                            <ListItemText primary={"SETTINGS"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Info /></ListItemIcon>
                            <ListItemText primary={"ABOUT"} />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content} style={{ height: "100vh", backgroundColor: "#ffa500" }}>
                    <div className={classes.toolbar} />
                    <Router>
                        <React.Fragment>
                            <Route exact path="/Home" component={ListArea}  />
                            <Route path={`${"/Home"}/:id`} component={Schedule}  />
                        </React.Fragment>
                    </Router>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Home);