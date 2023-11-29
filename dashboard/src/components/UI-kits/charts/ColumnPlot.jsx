import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const data = [
    {
      "city": "石家庄",
      "type": "水果",
      "value": 14500
    },
    {
      "city": "石家庄",
      "type": "米面",
      "value": 8500
    },
    {
      "city": "石家庄",
      "type": "特产零食",
      "value": 10000
    },
    {
      "city": "石家庄",
      "type": "茶叶",
      "value": 7000
    },
    {
      "city": "深圳",
      "type": "水果",
      "value": 9000
    },
    {
      "city": "深圳",
      "type": "米面",
      "value": 8500
    },
    {
      "city": "深圳",
      "type": "特产零食",
      "value": 11000
    },
    {
      "city": "深圳",
      "type": "茶叶",
      "value": 6000
    },
    {
      "city": "温州",
      "type": "水果",
      "value": 16000
    },
    {
      "city": "温州",
      "type": "米面",
      "value": 5000
    },
    {
      "city": "温州",
      "type": "特产零食",
      "value": 6000
    },
    {
      "city": "温州",
      "type": "茶叶",
      "value": 10000
    },
    {
      "city": "宁波",
      "type": "水果",
      "value": 14000
    },
    {
      "city": "宁波",
      "type": "米面",
      "value": 9000
    },
    {
      "city": "宁波",
      "type": "特产零食",
      "value": 10000
    },
    {
      "city": "宁波",
      "type": "茶叶",
      "value": 9000
    },
    {
      "city": "无锡",
      "type": "水果",
      "value": 14000
    },
    {
      "city": "无锡",
      "type": "米面",
      "value": 9000
    },
    {
      "city": "无锡",
      "type": "特产零食",
      "value": 10000
    },
    {
      "city": "无锡",
      "type": "茶叶",
      "value": 6000
    }
];

const ColumnPlot = () => {
//   const [data, setData] = useState([]);

  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};

export default ColumnPlot;