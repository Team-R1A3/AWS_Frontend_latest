import axios from 'axios';
export const GET_ALL_INSTANCES='get_all_instances';
export const GET_INSTANCE= 'get_instance';
export const GET_INSTANCE_CHART= 'get_instance_chart';
export const NETWORK_PACKETSOUT_CHART= 'network_packetsout_chart';
export const NETWORK_PACKETSIN_CHART= 'network_packetsin_chart';
export const CPU_CREDITUSAGE_CHART= 'cpu_creditusage_chart';


const initialState= {
    instanceArray: [],
    instance:{},
    instanceChart: null,
    instance_network_packetsout_chart : null,
    instance_network_packetsin_chart: null,
    instance_cpu_creditusage_chart: null
}

//get all instances
export const get_all_instances=()=>dispatch=>{
    axios.get('http://localhost:8080/get/instance-details/')
        .then(res=>{
            dispatch({
                type: GET_ALL_INSTANCES,
                payload: res.data
            })
        })
        .catch(err=> console.log(err));
}

//get instance with instance id
export const get_instance=(instanceId)=>dispatch=>{
    axios.get(`http://localhost:8080/get/instance-details/${instanceId}`)
        .then(res=>{
            dispatch({
                type: GET_INSTANCE,
                payload: res.data
            })
        })
}


//get chart for particular instance cpu usage chart

export const get_instance_chart=(instanceId)=>dispatch=>{
    axios.get(`http://localhost:8080/get/chart/cpuutil/${instanceId}`)
        .then(res=>{
            dispatch({
                type: GET_INSTANCE_CHART,
                payload: res.data
            }
            )
        })
}


//get chart for particular instance network packet out

export const get_instance_network_packetsout_chart=(instanceId)=>dispatch=>{
    axios.get(`http://localhost:8080/get/chart/networkpacketsout/${instanceId}`)
        .then(res=>{
            dispatch({
                type: NETWORK_PACKETSOUT_CHART,
                payload: res.data
            }
            )
        })
}

//get chart for particular instance network packet in

export const get_instance_network_packetsin_chart=(instanceId)=>dispatch=>{
    axios.get(`http://localhost:8080/get/chart/networkpacketsin/${instanceId}`)
        .then(res=>{
            dispatch({
                type: NETWORK_PACKETSIN_CHART,
                payload: res.data
            }
            )
        })
}

//get chart for particular instance cpu credit usage

export const get_instance_cpu_creditusage_chart=(instanceId)=>dispatch=>{
    axios.get(`http://localhost:8080/get/chart/cpucreditUsage/${instanceId}`)
        .then(res=>{
            dispatch({
                type: CPU_CREDITUSAGE_CHART,
                payload: res.data
            }
            )
        })
}


const instanceListReducer = (state= initialState,action)=>{
    switch(action.type) {
        case GET_ALL_INSTANCES:
            return{
                ...state,
                instanceArray: action.payload,
            };

        case GET_INSTANCE: 
            return{
                ...state,
                instance: action.payload
            }

        case GET_INSTANCE_CHART:
            return{
                ...state,
                instanceChart: action.payload
            }
        case NETWORK_PACKETSOUT_CHART:
             return{
                 ...state,
                 instance_network_packetsout_chart: action.payload
             }
         case NETWORK_PACKETSIN_CHART:
              return{
                  ...state,
                  instance_network_packetsin_chart: action.payload
              }
        case CPU_CREDITUSAGE_CHART:
                return{
                    ...state,
                    instance_cpu_creditusage_chart: action.payload
                }
            
        default: 
            return state;
    }

}
export default instanceListReducer;