import React, { useState } from 'react';

import './LifeGame.css';

import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const LifeGame = () => {

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

    // const styles = {
    //     background: {
    //     position: 'relative' as 'relative',
    //       backgroundImage: `url(${places[0].img})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       width: '100%',
    //       backgroundAttachment: 'fixed',
    //       backgroundRepeat: 'no-repeat',
    //       minWidth: '100%',
    //       minHeight: '100vh'
    //     },
    //     apple: {
    //         position: 'absolute' as 'absolute',
    //         top: 70,
    //         left: 40
    //     },
    //     apple2: {
    //         position: 'absolute' as 'absolute',
    //         top: 70,
    //         left: 700
    //     }
    //    };

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

        // <div>
        // <Grid container sx={{ m: 1 }} style={styles.background}>
        //     <Grid item>
        //     {/* <Typography variant="h6" gutterBottom component="div">
        //         Apples: {apple}
        //     </Typography> */}
        //     </Grid>
        //   {show &&
        //     <Grid item onClick={() => {
        //         setShow(prev => !prev)
        //         // setApple(prev => prev++)
        //     }
        //     }>
        //         <ImageListItem   
        //             sx={{ width: 100 }}
        //             style={styles.apple}>
        //             <img
        //                 src={projects[0].img}
        //                 alt={'item.title'}
        //             />
        //         </ImageListItem>
        //     </Grid>
        //   }

        // {show2 &&
        //     <Grid item onClick={() => {
        //         setShow2(prev => !prev)
        //         // setApple(prev => prev++)
        //     }
        //     }>
        //         <ImageListItem   
        //             sx={{ width: 100 }}
        //             style={styles.apple2}>
        //             <img
        //                 src={projects[0].img}
        //                 alt={'item.title'}
        //             />
        //         </ImageListItem>
        //     </Grid>
        //   }
        // </Grid>
        // </div>