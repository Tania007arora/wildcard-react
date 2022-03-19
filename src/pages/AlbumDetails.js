import React from 'react'
import { useState, useEffect } from 'react'
import { getAlbumDetails, getPhotos } from '../services/albumServices';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import CustomTitleHeading from '../components/CustomTitleHeading';
import CustomHeading from '../components/CustomHeading';

function AlbumDetails() {
  let [details, setDetails] = useState();
  const { albumId } = useParams();
  let [photos, setPhotos] = useState([]);
  const albumfields = [
    {
      key: "Title",
      value: details.title //see if works
    }
  ]
  useEffect(() => {
    getAlbumDetails(setDetails, albumId);
    getPhotos(setPhotos, albumId);
  }, [albumId])
  const ImageDiv = styled(Box)(
    {
      backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100%'
    }
  )

  return (
    <Box p={3}>
      <CustomTitleHeading title="Details:" />
      {details && <>
        <Grid container>
          {albumfields && albumfields.map((field) => {
            return <Box key={field.key}><Grid item md={4}>
              <Typography variant="h5">{field.key}</Typography>
            </Grid>
              <Grid item md={8}>
                <Typography variant="subtitle" sx={{ fontSize: '1rem' }}>{field.value}</Typography>
              </Grid>
            </Box>
          })
          }
        </Grid>
        <Box pt={2}>
          <CustomHeading title="Comments" />
          {photos ? <Grid container>
            {photos.map((photo) => {
              return <Grid key={photo.id} item md={6}>
                <ImageDiv sx={{ backgroundImage: `url(${photo.thumbnailUrl})` }} />
              </Grid>
            })
            }

          </Grid>
            :
            <CustomTitleHeading title="No Photos" />

          }
        </Box>
      </>
      }
    </Box>

  )
}

export default AlbumDetails