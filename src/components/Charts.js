import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { get_instance_chart } from '../redux/ducks/getInstances';

const data = []

// average: 0.2109474854125743
// extendedStatistics:
// __proto__: Object
// timestamp: 1616973300000
// unit: "Percent"



const Chart=()=>{

    const {instanceId}= useParams();
    const dispatch= useDispatch();
    const instanceChart= useSelector(state=> state.instanceList.instanceChart);
    
    useEffect(()=>{
        dispatch(get_instance_chart(instanceId));
    },[dispatch]);
    //console.log(instanceChart);
     instanceChart && (
        instanceChart.data.map(instance=>{
            return(
                data.push({time: instance.extendedStatistics.timestamp, val:instance.average, unit: instance.extendedStatistics.unit})
            )
        })
     ) 

  
        const options = {
          chart: {
            type: 'spline',
            zoomType: 'xy',
            panning: true,
            panKey: 'shift',
            scrollablePlotArea: {
              minWidth: 700,
              scrollPositionX: 1
              }
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          credits: {
            enabled: false
          },              
          title: {
            text: 'CPUUtilization(%)'
          },
          subtitle: {
            text: ''
          },
          tooltip: {
            valueSuffix: '%',
           
          },
          xAxis: {
            gridLineWidth: 0,
            tickInterval: 1,
            type: 'category',
            labels: {
              overflow: 'justify'
             }       
          },
          yAxis: {
            labels: {
                  formatter: function() {
                      return this.value + ' %';
                      }
                    },
            title: {
                   text: 'Maximum'
                   },
              
            gridLineWidth: 1,      
          },
          plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: true
                },
            }
          },
          series:[
          { 
              allowPointSelect: true,
              data,
               
           }]
          };
            return (    
                <div style={{height:"100%",width:"100%"}}>               
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
      )
  }

  export default Chart;