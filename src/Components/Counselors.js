import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SanitizedHTML from 'react-sanitized-html';
import CardHeader from "@material-ui/core/CardHeader";

class Counselors extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container direction='column' spacing={0} >
                    {Object.entries(this.props.mentorList).map(arr => {
                        const mentor = arr[1];
                        return (<Grid item xs={12} container spacing={1} justify='flex-start' alignItems='center' alignContent='center'
                                      key={arr[0]} className={classes.mentorBlk} >
                                <Grid item xs={12} sm={3} md={4} style={{alignSelf:'flex-start'}}><img className={classes.mentorPhoto} src={mentor.img} alt={mentor.title} /></Grid>
                                <Grid item xs={12} sm={9} md={8} container spacing={0} >
                                        <Grid item xs={12}><h4>{mentor.title}</h4></Grid>
                                        <Grid item xs={12}><SanitizedHTML html={mentor.desc}
                                                   allowedTags={['b', 'i', 'em', 'strong', 'a']}
                                                  allowedAttributes={{'a': ['href', 'target']}}/></Grid>
                                        {mentor.brands.map(brandname => {
                                            const brand = this.props.brandList[brandname];
                                            if (!brand) return true;
                                            return (<Grid key={brandname} item xs={12} sm={6} >
                                                <CardHeader
                                                className={classes.brandHead}
                                                avatar={<img src={brand.img} className={classes.brandLogo} alt={brand.title} />}
                                                title={brand.title}
                                                subheader={<SanitizedHTML html={brand.desc}
                                                          allowedTags={['b', 'i', 'em', 'strong', 'a']}
                                                          allowedAttributes={{'a': ['href', 'target']}} />
                                                } />
                                            </Grid>)
                                        })}
                                </Grid>
                            </Grid>)
                    })}
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
    link : {
        textDecoration:'underline'
    },
    brandHead: {
        alignItems:'flex-start',
        padding:'10px 0 0 0'
    },
    mentorBlk : {
        borderTop:'1px solid ' + theme.palette.secondary.main,
        marginBottom:50
    },
    mentorPhoto : {
        width:'100%'
    },
    brandLogo : {
        width:45
    }
});



export default withStyles(styles)(Counselors);

