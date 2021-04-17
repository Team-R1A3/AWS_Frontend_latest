import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'
import { get_all_instances } from '../redux/ducks/getInstances';
// instanceId: "i-0f20484e9caf1babd"
// privateIp: "13.127.34.126"
// publicIp: "172.31.41.185"
// state: "RUNNING"
// type: "T2_MICRO"

const InstanceList=() =>{


    const dispatch= useDispatch();
    const instanceArray= useSelector(state=> state.instanceList.instanceArray);

    useEffect(()=>{
        dispatch(get_all_instances());
    },[dispatch]);
    console.log(instanceArray);
    return (
        <> 
         <Table responsive light color="light" style={{marginTop:" 3rem"}} >
            <thead>
                <tr>
                    <th style={{minWidth:" 10rem"}}>Name</th>
                    <th style={{minWidth:" 15rem"}}>Instance ID</th>
                    <th style={{minWidth:" 10rem"}}>Instance state</th>
                    <th style={{minWidth:" 10rem"}}>Instance type</th>
                    <th style={{minWidth:" 10rem"}}>Private Ip</th>
                    <th style={{minWidth:" 10rem"}}>Public Ip</th>

                    <th style={{minWidth:" 10rem"}}>Status Check</th>
                    <th style={{minWidth:" 10rem"}}>Alarm status</th>
                    <th style={{minWidth:" 10rem"}}>Availability zones</th>
                    <th style={{minWidth:" 10rem"}}>Elastic IP</th>
                    <th style={{minWidth:" 10rem"}}>Monitoring</th>
                    <th style={{minWidth:" 15rem"}}>Security group name</th>
                    <th style={{minWidth:" 10rem"}}>keyname</th>
                    <th style={{minWidth:" 15rem"}}>Launch time</th> 
                </tr>
            </thead>
            <tbody>
                {instanceArray? (
                    instanceArray.map(instance=>{
                        return(
                        <tr key= {instance.instanceId}>
                            <td>-</td>
                            <td><Link to= {`/instance_details/${instance.instanceId}`}>{instance.instanceId}</Link></td>
                            <td>{instance.state}</td>
                            <td>{instance.type}</td>
                            <td>{instance.publicIp}</td>
                            <td>{instance.privateIp}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>

                        </tr>
                        )
                    })
                ): null }                
            </tbody>
            </Table>
        </>
    )
}

export default InstanceList
