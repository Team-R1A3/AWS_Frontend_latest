import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { get_instance } from '../redux/ducks/getInstances';

const InstanceDetails= (props)=> {
    //const { instanceId}= props;
    const { instanceId}= useParams();
    console.log(instanceId, "hello");
    const dispatch= useDispatch();
    const instance= useSelector(state=> state.instanceList.instance);

    useEffect(()=>{
         dispatch(get_instance(instanceId));
    },[dispatch]);
    return (
        <>
            <div style={{boxShadow: "1px 2px 1px 1px #888888", minHeight:"100 rem", height:" 40rem", marginRight:"5rem", marginTop:"3rem"}}>
                <div style={{ backgroundColor:"#343a40",color:"white", height: "4rem" ,}}>
                    <h4 style={{ marginLeft:"2rem", paddingTop:"1rem"}}>Instance summary for {instance.instanceId}</h4>
                </div>
                <div >
                    <h5 style={{marginLeft:"2rem", marginTop:"2rem"}}>Instance Id</h5>
                    <p style={{marginLeft:" 3rem"}}>{instance.instanceId}</p>
                </div>
                <div>
                    <h5 style={{marginLeft:"2rem", marginTop:"2rem"}}>Instance Type</h5>
                    <p style={{marginLeft:" 3rem"}}>{instance.type}</p>
                </div>
                <div>
                    <h5 style={{marginLeft:"2rem", marginTop:"2rem"}}>Instance State</h5>
                    <p style={{marginLeft:" 3rem"}}>{instance.state}</p>
                </div>
                <div>
                    <h5 style={{marginLeft:"2rem", marginTop:"2rem"}}>Public Ipv4</h5>
                    <p style={{marginLeft:" 3rem"}}>{instance.publicIp}</p>
                </div>
                <div>
                    <h5 style={{marginLeft:"2rem", marginTop:"2rem"}}>Private Ipv4</h5>
                    <p style={{marginLeft:" 3rem"}}>{instance.privateIp ? instance.privateIp :'---' }</p>
                </div>
                <div>
                    <Link to={`/instance_chart/${instance.instanceId}`}style={{marginLeft:"2rem", marginTop:"2rem"}}><Button color="primary" size="medium">View Metrics</Button></Link>
                </div>
            </div>
        </>
    )
}

export default InstanceDetails
