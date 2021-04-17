import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useDispatch, useSelector } from 'react-redux';
import { get_instance_chart, get_instance_cpu_creditusage_chart, get_instance_network_packetsin_chart } from '../redux/ducks/getInstances';


const CPUcreditChart=(props)=> {
  const data = [];
  const {instanceId}= props;
  const dispatch= useDispatch();

  const chart= useSelector(state=> state.instanceList.instance_cpu_creditusage_chart);
  
  useEffect(()=>{
      dispatch(get_instance_cpu_creditusage_chart(instanceId));
  },[dispatch]);

  console.log(chart);

   chart && (
      chart.data.map(instance=>{
          return(
              data.push({time: instance.timestamp, val:instance.average})
              
          )
      })
   ) 
  
      const point= data.map((d)=>{
        return {
          name: d.time,
          y: d.val
        };
      })

      //console.log(data);
      //console.log(point);
   
        
        const options = {
          chart: {
            type: 'line',
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
            text: 'CPU Credit Usage (Count)'
          },
          rangeSelector: {
            allButtonsEnabled: true,
                buttons: [{
                  type: 'month',
                  count: 3,
                  text: 'Day',
                  dataGrouping: {
                      forced: true,
                      units: [['day', [1]]]
                  }
              }, {
                  type: 'year',
                  count: 1,
                  text: 'Week',
                  dataGrouping: {
                      forced: true,
                      units: [['week', [1]]]
                  }
              }, {
                  type: 'all',
                  text: 'Month',
                  dataGrouping: {
                      forced: true,
                      units: [['month', [1]]]
                  }
              }],
            selected: 2
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
            type: 'datetime',
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
              data: point,
            
               
           }]
          };
      return (    
              <>
               <div style={{width:"90%", height:"80%", marginTop: "3em"}}>               
                <HighchartsReact highcharts={Highcharts} options={options} />
                </div>

                </>
      )}
  

  export default CPUcreditChart;