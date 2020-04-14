import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = theme => ({

    siz:{
        width:'50%',
    },
    playbutton:{
        width:'100px',
        height:'100px',
        marginTop:'50px',
        cursor:'pointer',
    }

  });
export class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = { activeItemIndex: 0 };
        this.isDisable = this.isDisable.bind(this);
    }
    componentWillMount() {
        console.log(this.props.tile)
    }
    isDisable(v){
        return (v.status !=="active")
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div style={{ "padding": "0 60px", "width": 1000, "margin": "0 auto" }}>
                    <ItemsCarousel
                        placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
                        enablePlaceholder={true}
                        numberOfPlaceholderItems={4}
                        numberOfCars={2}
                        gutter={12}
                        slidesToScroll={1}
                        chevronWidth={60}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={<img className={classes.siz} src={process.env.PUBLIC_URL + 'assets/images/right_arr.png'} />}
                        leftChevron={<img className={classes.siz} src={process.env.PUBLIC_URL + 'assets/images/left_arr.png'} />}
                    >
                        {this.props.tile.map((v_, i) =>
                        <div key={i}>
                            <div
                                
                                style={{
                                    height: 200,
                                    background: `url(${v_.thum})`,
                                    backgroundSize: 'cover',
                                }}
                            >
                            <PlayArrowIcon className={classes.playbutton} disabled={this.isDisable(v_)} onClick={()=>{this.props.viewCourseById(v_._id)}} />
                                {/* <Button variant="contained"  color="primary" onClick={()=>{this.props.viewCourseById(v_._id)}} >
                                    {v_.title}
                                </Button> */}
                            </div>
                            <Typography>
                                {v_.ctype}
                            </Typography>
                            </div>
                        )}
                    </ItemsCarousel>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Carousel)
