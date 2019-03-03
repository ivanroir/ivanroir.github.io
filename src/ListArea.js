import React from "react";
import {
    withStyles,
    IconButton,
    GridListTile,
    GridListTileBar,
    GridList
} from '@material-ui/core';

import { Info } from '@material-ui/icons';

import { Link } from "react-router-dom";

import mtMaynoba from "./assets/img/place/MtMaynoba.jpg";
import mtMakiling from "./assets/img/place/MtMakiling.jpg";
import mtApo from "./assets/img/place/MtApo.jpg";
import mtDulang from "./assets/img/place/MtDulangDulang.jpg";
import mtPulag from "./assets/img/place/MtPulag.jpg";
import mtKitanglad from "./assets/img/place/MtKitanglad.jpg";

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    gridList: {
        width: "99%",
        height: "85vh",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


const tileData = [
    {
        id: 0,
        img: mtMaynoba,
        title: 'Mount Maynoba and Mount Cayabu',
        features: 'Sea of clouds, scenic views of the Sierra Madre, waterfalls',
        difficulty: 3,
        masl: 728,
    },
    {
        id: 1,
        img: mtMakiling,
        title: 'Mount Makiling',
        features: 'Mt. Makiling is a hiking and biking paradise, complemented by a lush forest',
        difficulty: 2,
        masl: 1090,
    },
    {
        id: 2,
        img: mtApo,
        title: 'Mount Apo',
        features: 'It is the highest mountain in the Philippine Archipelago',
        difficulty: 7,
        masl: 2956,
    },
    {
        id: 3,
        img: mtDulang,
        title: 'Mount Dulang-Dulang',
        features: 'The second-highest mountain in the Philippines also possesses one of the most impressive forests in the country',
        difficulty: 8,
        masl: 2938,
    },
    {
        id: 4,
        img: mtPulag,
        title: 'Mount Pulag',
        features: 'It is the third highest mountain in the Philippines',
        difficulty: 6,
        masl: 2922,
    },
    {
        id: 5,
        img: mtKitanglad,
        title: 'Mount Kitanglad',
        features: 'It is the fourth highest mountain in the Philippines ',
        difficulty: 4,
        masl: 2899,
    },
];

class ListArea extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList} cols={1} rows={1}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.title} >
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>features: {tile.features}</span>}
                                    actionIcon={
                                        <Link to={{
                                            pathname: `${"/Home"}/${tile.id}`,
                                            state: {
                                                img: tile.img,
                                                title: tile.title,
                                                features: tile.features,
                                                difficulty: tile.difficulty,
                                                masl: tile.masl
                                            }
                                        }}>
                                            <IconButton className={classes.icon}>
                                                <Info />
                                            </IconButton>
                                        </Link>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </React.Fragment >
        );
    }
}

export default withStyles(styles, { withTheme: true })(ListArea);