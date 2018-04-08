import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';

export default class Chart2 extends Component {
  constructor(props) {
    super(props);

    this.state = {data: props.data};
  }

  render() {
    var points = this.state.data;

    var data = points.map ((value)=> {
      return {name: 'a', av: value}
    });

    return (
      <LineChart width={900} height={300} data={data}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Line type="monotone" name="Уровень погружения" dataKey="av" stroke="#8884d8" />
      </LineChart>
    );
  }
}
