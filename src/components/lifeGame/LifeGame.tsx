import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const LifeGame = () => {

    const {projects} = useTypedSelector((state) => state.projectList);

    const {food, places} = useTypedSelector((state) => state.lifeGame);

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    // const [apple, setApple] = useState(0);
    

    const styles = {
        background: {
        position: 'relative' as 'relative',
          backgroundImage: `url(${places[0].img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          minWidth: '100%',
          minHeight: '100%'
        },
        apple: {
            position: 'absolute' as 'absolute',
            top: 70,
            left: 40
        },
        apple2: {
            position: 'absolute' as 'absolute',
            top: 70,
            left: 700
        }
       };

    return (
        <div>
        <Grid container sx={{ m: 1 }} style={styles.background}>
            <Grid item>
            {/* <Typography variant="h6" gutterBottom component="div">
                Apples: {apple}
            </Typography> */}
            </Grid>
          {show &&
            <Grid item onClick={() => {
                setShow(prev => !prev)
                // setApple(prev => prev++)
            }
            }>
                <ImageListItem   
                    sx={{ width: 100 }}
                    style={styles.apple}>
                    <img
                        src={projects[0].img}
                        alt={'item.title'}
                    />
                </ImageListItem>
            </Grid>
          }

        {show2 &&
            <Grid item onClick={() => {
                setShow2(prev => !prev)
                // setApple(prev => prev++)
            }
            }>
                <ImageListItem   
                    sx={{ width: 100 }}
                    style={styles.apple2}>
                    <img
                        src={projects[0].img}
                        alt={'item.title'}
                    />
                </ImageListItem>
            </Grid>
          }
        </Grid>
        </div>
    );
};

export default LifeGame;