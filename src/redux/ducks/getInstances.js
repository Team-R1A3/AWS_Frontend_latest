import axios from 'axios';
export const GET_ALL_INSTANCES='get_all_instances';
export const GET_INSTANCE= 'get_instance';
export const GET_INSTANCE_CHART= 'get_instance_chart';


const initialState= {
    instanceArray: [],
    instance:{},
    instanceChart: null,
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


//get chart for particular instance

export const get_instance_chart=(instanceId)=>dispatch=>{
    axios.get(`http://localhost:8080/get/chart/${instanceId}`)
        .then(res=>{
            dispatch({
                type: GET_INSTANCE_CHART,
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
        default: 
            return state;
    }

}
export default instanceListReducer;