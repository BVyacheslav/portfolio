import React, { FC } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';

import { useTypedSelector } from '../hooks/useTypedSelector';

import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';

const ProjectList: FC = () => {

  const {projects} = useTypedSelector((state) => state.projectList);

  const router = useHistory();

    return (
      <Grid container spacing={5} justifyContent="center" sx={{ my: 1 }}>
        {projects.map((item) => (
          <Grid item key={item.id}>
          <ImageListItem 
            onClick={() => {
              if (item.id === 1) {
                router.push(RouteNames.PORTFOLIO)
              } else if (item.id === 2) {
                router.push(RouteNames.FILMS)
              } else if (item.id === 3) {
                router.push(RouteNames.LIFE)
              }  
              }}  
            sx={{ width: 300 }}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
            />
          </ImageListItem>
          </Grid>
        ))}
      </Grid>
    )
}

export default ProjectList;