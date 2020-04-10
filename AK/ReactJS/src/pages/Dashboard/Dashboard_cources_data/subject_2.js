import React, { Component } from "react";
import Slider from "react-slick";
import './subject_2.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/right_arr.png'})`,width:'5%',height:'67%',backgroundSize:'cover' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/left_arr.png'})    `,width:'5%',height:'67%',backgroundSize:'cover' }}
        onClick={onClick}
      />
    );
  }

export default class Subjectsecond extends Component {

    constructor(props){
        super(props)
    }
  state = {
    display: true,
    width: 600,
    margin:'0 auto'
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>


        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
            margin: this.state.margin 
          }}
        >
          <Slider {...settings}>
            {this.props.tile.map((item,i)=>{
               return <div key={i}>
                <Button variant="contained" onClick={()=>{this.props.course(item._id)}} color="primary">
                    View
                </Button>
                <Typography align="center">{item.title}</Typography>
                        </div>
            })}

          </Slider>
        </div>
      </div>
    );
  }
}