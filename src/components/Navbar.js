import React from 'react'
import {DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

const MyNavbar=()=> {
    return (
        <div>
            <Navbar color="dark" dark expand="sm" >
                    <NavbarBrand href='/'  style= {{marginLeft:"5rem"}}>AWS</NavbarBrand>
                    <Input type="text"  placeholder="Search here..." style={{ width: "25rem", marginLeft: "20rem"}}/>


                        <Nav >
                                <UncontrolledDropdown nav inNavbar style= {{marginLeft:"15rem"}} >
                                    <DropdownToggle nav  style={{color:"white", marginLeft:"10rem"}} direction="down" caret>
                                        Akshad Agrawal
                                    </DropdownToggle>
                                    <DropdownMenu  color="dark" style={{backgroundColor: "#636f7b"}} right>
                                        <DropdownItem>My Account 310113328377</DropdownItem>
                                        <DropdownItem>My Organization</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>My Service Quotas</DropdownItem>
                                        <DropdownItem>My Billing Dashboard</DropdownItem>
                                        <DropdownItem>My Security Credentials</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Sign Out</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>


                                <UncontrolledDropdown nav inNavbar  style= {{marginRight:"1rem"}} >
                                    <DropdownToggle nav  style={{color:"white"}} direction="down" caret>
                                        N. Virginia
                                    </DropdownToggle>
                                    <DropdownMenu  color="dark" style={{backgroundColor: "#636f7b"}} right>
                                        <DropdownItem>US East (N. Virginia)us-east-1</DropdownItem>
                                        <DropdownItem>US East (Ohio)us-east-2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Africa (Cape Town)af-south-1</DropdownItem>
                                        <DropdownItem>Asia Pacific (Hong Kong)ap-east-1</DropdownItem>
                                        <DropdownItem>Asia Pacific (Osaka)ap-northeast-3</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Asia Pacific (Seoul)ap-northeast-2</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar  style= {{marginRight:"1rem"}} >
                                    <DropdownToggle nav  style={{color:"white",  }} direction="down" caret >
                                        Support
                                    </DropdownToggle>
                                    <DropdownMenu  color="dark" style={{backgroundColor: "#636f7b"}} right>
                                        <DropdownItem>Support Center</DropdownItem>
                                        <DropdownItem>Export help</DropdownItem>
                                        <DropdownItem>Forums</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Documentation</DropdownItem>
                                        <DropdownItem>Training</DropdownItem>
                                        <DropdownItem>Getting Started Resource center</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            
                        </Nav>
            </Navbar>
        </div>
    )
}

export default MyNavbar; 