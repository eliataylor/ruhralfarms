import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import SanitizedHTML from 'react-sanitized-html';

const productData = [
    {
        img:"/images/products/tamarind.jpg",
        title:'tamarind body scrub',
        desc:"Formulated in Northern Thailand with Tamarind and Honey. Tamarind has been used for many generations as a natural skin exfoliant in Asia. We noticed a lack of knowledge regarding this ingredient in the western beauty/skincare markets, so we decided to bring it to the market and it was a hit."
    },
    {
        img:"/images/products/tumeric.jpg",
        title:"tumeric face scrub",
        desc:"All-Natural Turmeric Face Mask + Scrub. Our Scrub is formulated with organic Turmeric sourced from Northern Thailand. Turmeric is considered nature's most powerful herb with anti-inflammatory, anti-oxidant, anti-bacterial, and anti-aging properties. 10% of each sale of this product was donated to <a\n" +
            "                          target='_blank' rel=\"noopener noreferrer\"\n" +
            "                          href='https://www.warmheartworldwide.com/'>www.warmheartworldwide.com</a>."
    },
    {
        img:"/images/products/goldmilk-board.jpg",
        title:"Gold milk",
        desc:"A product inspired by Sammie's Grandmother's traditional Gold Milk recipe. Gold Milk is a multi-purpose paste created with a fragrant blend of date paste, coconut butter, cardamom, cloves, cinnamon, and single-origin Turmeric sourced through <a\n" +
            "                          target='_blank' rel=\"noopener noreferrer\" href='https://www.diasporaco.com/'>Diaspora Co</a>. All organic ingredients."
    },
    {
        img:"/images/products/goldsauce.jpg",
        title:"gold sauce",
        desc:"The savory version of our <em>Gold Milk</em>. Featuring single-origin Turmeric sourced through <a\n" +
            "                          target='_blank' rel=\"noopener noreferrer\" href='https://www.diasporaco.com/'>Diaspora Co</a>, and blended with coconut butter and a mix of savory Ayurvedic herbs. We marketed this as a multi-purpose paste that could be used as a spread, marinade, or butter alternative. All organic."
    },
    {
        img:"/images/products/hairbutter-hand.jpg",
        title:"hair butter",
        desc:"This hair butter was formulated on our journey through Morocco. We created this with Argan Oil,\n" +
            "    Jamaican Castor Oil, Amla, and a floral essential oil blend. All organic, all-natural."
    },
    {
        img:"/images/products/florul.jpg",
        title:"florul",
        desc:"Florul is a product that provides a floral spa bathing experience in a box. Inspired by the\n" +
            "    infamous flower baths of Bali and Morocco's hammams. We have partnered with various flower farms\n" +
            "    around California and Hawai'i to deliver fresh flower heads to our customers along with everything\n" +
            "    they would need for a bath, which includes bath salt blends, candles, herbal bath tea, and more\n" +
            "    add ons to complete the unique bathing experience the customer is looking for."
    },
    {
        img:"/images/products/skinwater.jpg",
        title:"skin water",
        desc:"One of our most popular products, Skin Water is a unique blend of liquid silica and chlorophyll\n" +
            "    that can be added to smoothies, water, and juices. Silica is a key ingredient in collagen creation\n" +
            "    and is a building block for healthy skin, hair, and nails. Chlorophyll assists in optimal\n" +
            "    digestion, gut health, immunity, and liver function. Blending these two ingredients together\n" +
            "    creates a unique elixir that promotes over inner and outer wellbeing."
    }
]

class ProductGrid extends React.Component {
    constructor() {
        super();
        this.state = {showDesc:false};
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction='column'>
                <p>We specialize in labels and packaging from the screen to the shelf</p>
                <GridList className={classes.gridList}
                          cols={window.innerWidth > 1000 ? 3.5 : ( window.innerWidth > 600 ? 2.5 : 1.5)}
                          cellHeight={window.innerWidth > 1000 ? 220 : ( window.innerWidth > 600 ? 250 : 300)} >
                    {productData.map(tile => (
                        <GridListTile key={tile.img}>
                            <div className={classes.bgImage} style={{backgroundImage:'url('+tile.img+')'}}>&nbsp;</div>
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />
                            {this.state.showDesc === true ?
                            <Grid  className={classes.floatDesc}><SanitizedHTML html={tile.desc}  allowedTags={[ 'b', 'i', 'em', 'strong', 'a' ]}  allowedAttributes={{'a': ['href']}}  /></Grid> : ''}
                        </GridListTile>
                    ))}
                </GridList>
                <Grid item>
                    <FormControlLabel
                        value={this.state.showDesc}
                        onChange={e=>this.setState({showDesc : !this.state.showDesc})}
                        control={<Checkbox color="primary"/>}
                        label="Read Product Descriptions"
                        labelPlacement="end" />
                </Grid>
            </Grid>

        );
    }
}


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
        textTransform:'capitalize',
        fontWeight:700,
        fontSize:16,
        letterSpacing:1,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
    },
    floatDesc: {
        position:'absolute',
        top:0,
        left:0,
        padding:4,
        fontSize:15,
        textShadow:'0px -1px rgba(121, 121, 121, 0.73)',
        background: 'linear-gradient(to bottom, rgba(255,255,255,.7) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,0) 100%)',
    },
    bgImage : {
        width:'100%', height:'100%',
        backgroundSize:'cover',
    }
});



export default withStyles(styles)(ProductGrid);

