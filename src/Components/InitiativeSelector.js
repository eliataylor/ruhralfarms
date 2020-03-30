import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
//import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default function InitiativeSelector(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [initiatives, setInitiatives] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function toggleItem(e) {
    var copy = {...initiatives};
    var id = e.currentTarget.getAttribute('data-initiatve');
    if (typeof initiatives[id] !== 'undefined') {
      delete copy[id];
      setInitiatives(copy);
    } else {
      if (Object.keys(copy).length >= 3) return false;
      copy[id] = true;
      setInitiatives(copy);
    }
  }

  const selectedRows = props.tileData.map(tile => {
    if (typeof initiatives[tile.title] !== 'undefined') {
      return (
        <CardHeader
                className={classes.cardHeader}
                avatar={<Avatar src={tile.img} variant='rounded' />}
                title={
                  <div>
                    <small>investment <em>ideas</em></small>
                    <p>{tile.invest}</p>
                  </div>
                }
                subheader={tile.warning ? tile.warning : ''}
              />);
    } return '';
  })


  if (open === false) {
    return (
      <div>
          <div className={classes.rootList}>
          <label className={classes.placeholder} >What initiatives do you want to work on? Select 1, 2 or 3. &nbsp; &nbsp; <small onClick={handleClickOpen}><u>expand all</u></small></label>
          <GridList className={classes.gridList} cols={window.innerWidth > 600 ? 4.5 : 2.5}>
            {props.tileData.map(tile => (
                  <GridListTile
                    key={tile.img}
                    className={classes.skillBlockBtn}
                    data-initiatve={tile.title}
                    onClick={toggleItem}
                    >
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar title={tile.title} className={(typeof initiatives[tile.title] !== 'undefined') ? ' selected ' : ''} />
                  </GridListTile>
              ))}
          </GridList></div>
          {selectedRows}
          </div>
        );
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle className={classes.appBar}>
            <Button color='secondary' variant='contained' className='float-left' onClick={handleClose} aria-label="close">
              Close
            </Button>
            Select 1, 2 or 3 initiatives for your focus
      </DialogTitle>
      <DialogContent>
        {selectedRows}
        <GridList>
        {props.tileData.map(tile => (
              <GridListTile
                key={tile.img}
                className={'col-lg-2 col-md-3 col-sm-4 col-6 '  + classes.skillBlockBtn}
                data-initiatve={tile.title}
                onClick={toggleItem}
                >
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} className={(typeof initiatives[tile.title] !== 'undefined') ? ' selected ' : ''} />
              </GridListTile>
          ))}
        </GridList>

      </DialogContent>
    </Dialog>
  );
}


const useStyles = makeStyles((theme) => ({
  h1: {
    fontWeight:800,
    borderBottom:'1px solid #202020',
    marginBottom:40
  },
  cardHeader : {
    padding:0
  },
  appForm : {
    color:'#202020',
    fontWeight:600
  },
  appBar : {
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    textAlign:'left'
  },
  appSlider : {
    textAlign:'right',
    margin:'20px 0'
  },
  sliderLabel : {
    marginBottom:0
  },
  subheader: {
    marginBottom:0,
    fontWeight:800,
    borderBottom:'1px solid #202020'
  },
  rootList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    flexWrap: 'nowrap',
    width:'100%',
    transform: 'translateZ(0)',
  },
  placeholder : {
    color:'#202020',
    fontWeight:600
  },
  skillsSelector: {
    color:'#202020',
    display:'flex',
    paddingLeft:5,
    paddingRight:5,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  skillBlockBtn : {
    cursor:'pointer',
    '&[aria-selected="true"] .MuiGridListTileBar-title' : {
      color:theme.palette.primary.main
    },
    '& .selected' : {
      color:theme.palette.primary.main
    },
    '& .selected .MuiGridListTileBar-title' : {
      color:theme.palette.primary.main
    },
    '& .selected .MuiGridListTileBar-titleWrap' : {
      color:theme.palette.primary.main
    }
  },
  labelDesc : {
    display: 'block',
    margin: 0,
    borderBottom: '1px solid #202020',
    fontSize: 12,
  },
  selectorIndicator : {
    cursor:'pointer'
  },
  dtImg : {
    width:'100%', height:'100%',
    backgroundSize:'cover',
    backgroundPosition:'center center'
  },
  warning : {
    color:'orange'
  }

}));
