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
      value: "title" //see if works
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
      <CustomHeading title="Album" />
      <CustomTitleHeading title="Details:" />
      {details && <>

        {albumfields && albumfields.map((field) => {
          return <Grid container key={field.key}><Grid item md={4}>
            <Typography variant="body1">{field.key}</Typography>
          </Grid>
            <Grid item md={8}>
              <Typography variant="subtitle" sx={{ fontSize: '1rem' }}>{details[field.value]}</Typography>
            </Grid>
          </Grid>
        })
        }

        <Box pt={2}>
          <CustomHeading title="Photos" />
          {photos ? <Grid container>
            {photos.map((photo) => {
              console.log(photo)
              return <Grid key={photo.id} item md={3}>
                <Box sx={{ height: '150px', width: '150px', p: 2 }}>
                  <ImageDiv sx={{ backgroundImage: `url(${photo.thumbnailUrl})` }} />
                </Box>
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