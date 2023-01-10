import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

export const StyledSlider = styled(Slider)({
  pointerEvents: 'none',
  width: 8,
  height: 120,
  marginTop: '20px',
  '& .MuiSlider-rail': {
    color: 'transparent',
  },
  '& .MuiSlider-track': {
    border: 'none',
    color: 'rgb(44 20 20 / 71%)',
    width: '20px',
    borderRadius: '0',
  },
  '& .MuiSlider-thumb': {
    pointerEvents: 'all',
    marginLeft: '36px',
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing',
    },
  },
  '& .MuiSlider-valueLabelOpen': {},
});
