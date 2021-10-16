import React, { FC } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { useTypedSelector } from '../hooks/useTypedSelector';

import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';

const ProjectList: FC = () => {

  const {projects} = useTypedSelector((state) => state.projectList);

  const router = useHistory();

    return (
        <>
        {projects.map((item) => (
          <ImageListItem key={item.id} 
            onClick={() => {
              if (item.id === 1) {
                router.push(RouteNames.PORTFOLIO)
              } else if (item.id === 2) {
                router.push(RouteNames.FILMS)
              } else if (item.id === 3) {
                router.push(RouteNames.LIFE)
              }  
              }}  
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 200 }}>
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
        ))}
      </>
    )
}

export default ProjectList;