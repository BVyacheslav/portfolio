import React, { FC, useState } from 'react';

import './LifeGame.css';

import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { LifeGameActionCreators } from '../../store/reducers/lifeGame/actionCreators';

const LifeGame: FC = () => {

    const {food, places} = useTypedSelector((state) => state.lifeGame);

    const dispatch = useDispatch();

    // const [show, setShow] = useState(true);
    // const [show2, setShow2] = useState(true);
    const [count, setCount] = useState(0);
    
    const styles = {
        background: {
            backgroundImage: `url(${places[0].img})`,
            position: 'relative' as 'relative'
        }
    }

    return (
        <Box className="Game">
            <Box className="Gameb" style={styles.background}>
            <Typography>
                Apple: {count}
            </Typography>
               { food.map((item, i) => {
                   return (
                       !item.hide &&
                <ImageListItem   
                    onClick={() => {   
                        setCount(1)                             
                        dispatch(LifeGameActionCreators.setShow(i))
                            }}
                        style={{
                            position: 'absolute' as 'absolute',
                            top: item.positionY,
                            left: item.positionX,
                            width: item.width
                        }}>
                        <img
                            src={item.img}
                            alt={'food'}
                        />
                </ImageListItem>
                )
               })

            }
            {/* {show &&
                <ImageListItem   
                onClick={() => {setShow(prev => !prev)
                            setCount(prev => 1)
                        }}
                    sx={{  }}
                    style={styles.apple}>
                    <img
                        src={food[0].img}
                        alt={'item.title'}
                    />
                </ImageListItem>
            } */}
            {/* {show2 &&
                <ImageListItem   
                onClick={() => {setShow2(prev => !prev)
                        }}
                    sx={{  }}
                    style={styles.burger}>
                    <img
                        src={food[1].img}
                        alt={'item.title'}
                    />
                </ImageListItem>
            } */}
            </Box>
        </Box>
    );
};

export default LifeGame;

