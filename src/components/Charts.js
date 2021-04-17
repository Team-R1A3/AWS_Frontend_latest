import React from 'react'
import { useParams } from 'react-router';
import { Col, Container, Row } from 'reactstrap';
import CPUcreditChart from './CPUcreditChart';
import CPUutilChart from './CPUutilChart';
import NetworkInChart from './NetworkInChart';
import NetworkOutChart from './NetworkOutChart';
import Buttons from './RadioButtons';

const Chart= ()=> {
    
    const {instanceId}= useParams()
    return (
        <div  >
         <Row>
             <Buttons />
            <Row style={{marginTop:" -3rem", height:" 25rem"}}>
                <Col xs="6">
                    <CPUutilChart instanceId={instanceId} />
                </Col>
                <Col xs="6">
                     <NetworkOutChart instanceId={instanceId} />
                </Col>
            </Row>

            <Row >
                <Col xs="6" style={{ marginTop:"2 rem",height:" 20rem"}}>
                    <NetworkInChart instanceId={instanceId} />
                </Col>
                <Col xs="6">
                    <CPUcreditChart instanceId={instanceId} />
                </Col>
            </Row>

        </Row>
           
        </div>
    )
}

export default Chart;
