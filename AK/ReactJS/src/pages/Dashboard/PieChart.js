import React from 'react';
import { Pie } from 'react-chartjs-2';



export default class PieChart extends React.Component {
    constructor(props){
        super(props);
        this.state={datas:{
            labels: [
                'Assigned content',
                'completed content'
            ],
            datasets: [{
                data: [100, 0],
                backgroundColor: [
                    '#999',
                    '#13af00'
                ],
                hoverBackgroundColor: [
                    '#6f6e6e',
                    '#218c14'
                ]
            }]
        }};
        this.dataManuplation = this.dataManuplation.bind(this);
    }
    dataManuplation(){
        let data_= Object.assign({}, this.state.datas); 
        data_.datasets[0].data= [(100-this.props.selectPie.completion), this.props.selectPie.completion];
       this.setState({
        datas:data_
       },()=>{
        console.log(this.state.datas.datasets)
       })
    }

    componentDidMount(){
        this.dataManuplation() 
    }
    render() {
        return (
            <div>
                <Pie data={this.state.datas} />
            </div>
        );
    }
};