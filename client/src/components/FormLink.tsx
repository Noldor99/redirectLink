import { TextField, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useCreateLinkMutation } from '../store/api/linkApi';

const FormLink = () => {
  const [linkUrl, setLinkUrl] = useState<string>('');

  const [createLink] = useCreateLinkMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    linkUrl && createLink({ link_long: linkUrl });
    setLinkUrl('');
  };

  return (
    <Box>
      <Typography textAlign='center' variant='h4'>
        Shorten Url
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              value={linkUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLinkUrl(e.target.value)
              }
            />
          </Grid>
          <Grid
            item
            xs={4}
            display='flex'
            alignItems='center'
            justifyContent='flex-end'
          >
            <Button type='submit'>Create</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FormLink;
