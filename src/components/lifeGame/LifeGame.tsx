import React, { FC, useState } from 'react';

import './LifeGame.css';

import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const LifeGame: FC = () => {

    const {food, places} = useTypedSelector((state) => state.lifeGame);

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    const [count, setCount] = useState(0);
    
    const styles = {
        background: {
            backgroundImage: `url(${places[0].img})`,
            position: 'relative' as 'relative'
        },
        apple: {
            position: 'absolute' as 'absolute',
            top: 70,
            left: 150
        },
        burger: {
            position: 'absolute' as 'absolute',
            top: 68,
            left: 230
        }
    }


    return (
        <Box className="Game">
            <Box className="Gameb" style={styles.background}>
            <Typography>
                Apple: {count}
            </Typography>
            {show &&
                <ImageListItem   
                onClick={() => {setShow(prev => !prev)
                            setCount(prev => 1)
                        }}
                    sx={{ width: 40 }}
                    style={styles.apple}>
                    <img
                        src={food[0].img}
                        alt={'item.title'}
                    />
                </ImageListItem>
            }
            {show2 &&
                <ImageListItem   
                onClick={() => {setShow2(prev => !prev)
                        }}
                    sx={{ width: 70 }}
                    style={styles.burger}>
                    <img
                        src={food[1].img}
                        alt={'item.title'}
                    />
                </ImageListItem>
            }
            </Box>
        </Box>
    );
};

export default LifeGame;

