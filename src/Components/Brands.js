import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import SanitizedHTML from 'react-sanitized-html';

class Brands extends React.Component {
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
                    {Object.entries(this.props.brandList).map(arr => {
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
                                const mentor = this.props.mentorList[men];
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



export default withStyles(styles)(Brands);

