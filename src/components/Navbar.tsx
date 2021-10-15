import { Tab, Tabs } from '@mui/material';
import React, { FC } from 'react';
import {useHistory} from 'react-router-dom';
import { RouteNames } from '../router';

import './Navbar.css'

const Navbar: FC = () => {
    const router = useHistory();
    return (
        <>
            <Tabs>
                <Tab 
                    label="HOME" 
                    onClick={() => router.push(RouteNames.HOME)}                
                    style={{color: '#969ba1'}} 
                />
                <Tab 
                    label="PROJECTS" 
                    onClick={() => router.push(RouteNames.PROJECTS)}                
                    style={{color: '#969ba1'}} 
                />
                <Tab 
                    label="ABOUT" 
                    onClick={() => router.push(RouteNames.ABOUT)}                
                    style={{color: '#969ba1'}} 
                />
                <Tab 
                    label="CONTACT" 
                    onClick={() => router.push(RouteNames.CONTACT)}                
                    style={{color: '#969ba1'}} 
                />
                
            </Tabs>
        </>
    );
};

export default Navbar;