import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel';
import Button from '@material-ui/core/Button';

export class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = { activeItemIndex: 0 };
        this.isDisable = this.isDisable.bind(this);
    }
    componentWillMount() {

    }
    isDisable(v){
        return (v.status !=="active")
    }
    render() {
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
                        rightChevron={<button >{'>'}</button>}
                        leftChevron={<button >{'<'}</button>}
                    >
                        {this.props.tile.map((v_, i) =>
                            <div
                                key={i}
                                style={{
                                    height: 200,
                                    background: `url(${v_.thum})`
                                }}
                            >
                                <Button variant="contained" disabled={this.isDisable(v_)} color="primary" onClick={()=>{this.props.viewCourseById(v_._id)}} >
                                    {v_.title}
                                </Button>
                            </div>
                        )}
                    </ItemsCarousel>
                </div>
            </div>
        )
    }
}

export default Carousel
