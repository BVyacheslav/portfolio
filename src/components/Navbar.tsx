import { Tab, Tabs } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';

const Navbar: FC = () => {
    const router = useHistory();

    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (router.location.pathname === RouteNames.HOME && value !== 0) setValue(0);
        else if (router.location.pathname === RouteNames.PROJECTS && value !== 1) setValue(1);
        else if (router.location.pathname === RouteNames.ABOUT && value !== 2) setValue(2);
        else if (router.location.pathname === RouteNames.CONTACT && value !== 3) setValue(3);
    }, [router.location.pathname, value]);

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