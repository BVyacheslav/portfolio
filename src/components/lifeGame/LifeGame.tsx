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
    const [location, setLocation] = useState(0);
    const bg = places[location].img;
    
    const styles = {
        background: {
            backgroundImage: `url(${bg})`,
            position: 'relative' as 'relative'
        }
    }

    return (
        <Box className="Game">
            <Box 
                className="Game-background" 
                style={styles.background} 
                onClick={() => {
                    if(location < places.length - 1) {
                        setLocation(location + 1)
                    }
                }}
            >
                { location === 1 &&
                    <Typography variant="inherit">
                        Food: {count}
                    </Typography>
                }
                { count === 2 &&
                    <Typography variant="inherit" className="Text">
                        Все съели!
                    </Typography>
                }
               { food.map((item, i) => {
                   return (
                       (!item.hide && location === 1) && 
                <ImageListItem 
                    key={item.id}
                    onClick={() => {   
                        setCount(count + 1)                             
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

