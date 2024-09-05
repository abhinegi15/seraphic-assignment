import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart = ({ series, labels, colors }) => {
  const options = {
    series: series,
    chart: {
      height: 300,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Reliable',
            formatter: function () {
              return 660;
            }
          }
        }
      }
    },
    labels: labels,
    colors: colors 
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="radialBar" height={300} />
    </div>
  );
};

export default RadialBarChart;
