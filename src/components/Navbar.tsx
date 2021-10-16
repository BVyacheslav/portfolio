import { Tab, Tabs } from '@mui/material';
import React, { FC } from 'react';
import {useHistory} from 'react-router-dom';
import { RouteNames } from '../router';

import './Navbar.css'

const Navbar: FC = () => {
    const router = useHistory();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    
    return (
        <>
            <Tabs 
            value={value} 
            onChange={handleChange} 
            textColor='inherit'
            centered>
                <Tab 
                    label="HOME" 
                    onClick={() => router.push(RouteNames.HOME)}                
                     
                />
                <Tab 
                    label="PROJECTS" 
                    onClick={() => router.push(RouteNames.PROJECTS)}                
             
                />
                <Tab 
                    label="ABOUT" 
                    onClick={() => router.push(RouteNames.ABOUT)}                
                   
                />
                <Tab 
                    label="CONTACT" 
                    onClick={() => router.push(RouteNames.CONTACT)}                
                    
                />
                
            </Tabs>
        </>
    );
};

export default Navbar;