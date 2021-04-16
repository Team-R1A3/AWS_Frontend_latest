import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'

const Sidebar=()=> {
    return (
        <>
            <Navbar color="light " light  style={{borderRight:" 2px #ffffff solid", width: "15rem" , minHeight: "60rem" }}>
                <Nav vertical >
                    
                        
                    <NavItem style={{ marginTop:"-8rem"}} active><NavLink href="#" disabled>Events</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Tags</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Limits</NavLink></NavItem>
                    <NavItem><NavLink href="#" disabled>Instances</NavLink></NavItem>
                    <NavItem><NavLink href="/" active><Link to="/">Instances</Link></NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Instance Types</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Launch Templates</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Spot requests</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Saving Plans</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Reserved Instances</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Dedicated hosts</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Scheduled Instances</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Capacity Reservations</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Dedicated hosts</NavLink></NavItem>
                    <NavItem><NavLink href="#" disabled >Images</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>AMIs</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>volumes</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Snapshots</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Lifecycle Manager</NavLink></NavItem>
                    <NavItem><NavLink href="#" active>Security Groups</NavLink></NavItem>



                </Nav>
            </Navbar>
        </>
    )
}

export default Sidebar
