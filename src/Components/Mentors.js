import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import SanitizedHTML from 'react-sanitized-html';

const brandList = {
    'Kapuna Hale' : {
        'img':'http://kapunahale.com/wwwroot/img/tree-round-blk.png',
        'title':'Kapuna Hale',
        'desc':"<a href='http://kapunahale.com' target='_blank'>Cooperative &amp; Community Living</a>",
        'mentors':['Gene Taylor']
    },
    'Ruhral' : {
        'img':'//cdn.shopify.com/s/files/1/1630/5941/files/Ruhrallogodesign2018_195x.png',
        'title':'ruhral.com',
        'desc':"<a href='http://sammietaylor.com' target='_blank'><em>Wellness products with a worldwide return</em></a>",
        'mentors':['Samanta Khalil']
    },
    'Sammie Taylor' : {
        'img':'http://sammietaylor.com/favicon_rounded.png',
        'title':'SammieTaylor.com',
        'desc':"<a href='http://sammietaylor.com' target='_blank'><em>Product and Experience Design</em></a>",
        'mentors':['Samanta Khalil']
    },
    'Track Authority Music' : {
        'img':'https://trackauthoritymusic.com/favicon.ico',
        'title':'Track Authority Music',
        'desc':"<a href='http://trackauthoritymusic.com' target='_blank'><em>Rewarding Musical Tastes</em></a>",
        'mentors':['Eli Taylor']
    },
    'Taylor Made Traffic' : {
        'img':'http://taylormadetraffic.com/wwwroot/images/TMM_Logo_flat.png',
        'title':'Taylor Made Traffic',
        'desc':"<a href='http://taylormadetraffic.com' target='_blank'><em>Application Engineering</em></a>",
        'mentors':['Eli Taylor']
    }
}

const mentorList = {
    'Gene Taylor': {
        img: "/images/kh-office-shaka.jpg",
        title: 'Gene Taylor',
        desc: "",
        brands: ['Kapuna Hale']
    },
    'Eli Taylor': {
        img: "/images/kh-office-muscle.jpg",
        title: 'Eli Taylor',
        desc: "Eli ",
        brands: ['Track Authority Music', 'Taylor Made Traffic']
    },
    'Samanta Khalil': {
        img:"/images/sammie-research.jpg",
        title:'Samanta Khalil',
        desc: "",
        brands: ['Sammie Taylor', 'Ruhral']
    }
}

class Mentors extends React.Component {
    constructor() {
        super();
        this.state = {brand:false};
    }

    showMentor(brand) {
        this.setState({brand:brand})
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container wrap='nowrap' justify='space-around' direction='row' >
                    {Object.entries(brandList).map(arr => {
                        const tile = arr[1];
                        return (<Grid key={arr[0]} onClick={e=>this.showMentor(tile)} item ><img style={{height:45}} src={tile.img} alt={tile.title} /></Grid>)
                    })}
                {this.state.brand === false ? '' :
                    <Dialog open={this.state.brand !== false} maxWidth={false} fullWidth
                            onClose={e => this.setState({brand: false})} >
                        <DialogContent>
                            <Grid container justify='space-between' className={classes.brandHead} spacing={1} >
                                <Grid container direction='column' item xs={9}>
                                    <Grid item>{this.state.brand.title}</Grid>
                                    <Grid item style={{fontSize:'80%'}}><SanitizedHTML html={this.state.brand.desc}
                                                                                       allowedTags={['b', 'i', 'em', 'strong', 'a']}
                                                                                       allowedAttributes={{'a': ['href']}}/></Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <img style={{maxWidth:100, float:'right'}} src={this.state.brand.img} alt={this.state.brand.title}/>
                                </Grid>
                            </Grid>
                            {this.state.brand.mentors.map(men => {
                                const mentor = mentorList[men];
                                return (
                                    <Grid key={men}>
                                        <h2>{mentor.title}</h2>
                                        <img style={{height:150}} src={mentor.img} alt={mentor.title}/>
                                    </Grid>
                                )
                            })}
                        </DialogContent>
                    </Dialog>
                    }
            </Grid>

        );
    }
}


const styles = theme => ({
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
        fontWeight:700,
        fontSize:16,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
    },
    brandHead: {
        marginBottom:20,
        borderBottom:'1px solid ' + theme.palette.secondary.main
    }
});



export default withStyles(styles)(Mentors);

