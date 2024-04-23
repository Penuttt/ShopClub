"use client"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import UploadIcon from '@mui/icons-material/CloudUpload';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const fileInputRef = React.useRef(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(itemData);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    console.log('Uploading file:', selectedFile);
    setSelectedFile(null);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = itemData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Sneaker Plus
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
                value={searchQuery}
                
              />
            </Search>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="upload"
              onClick={() => fileInputRef.current.click()}
            >
              <UploadIcon />
            </IconButton>
            {selectedFile && (
              <IconButton
                color="inherit"
                aria-label="upload"
                onClick={handleUpload}
              >
                <UploadIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
      <ImageList sx={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
  {filteredData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.title}
        subtitle={
          <React.Fragment>
            <h3>฿{item.price}</h3>
            <h3>size: {item.size} us</h3>
            <h3>by: {item.author}</h3>
          </React.Fragment>
        }
        position="below"
      />
    </ImageListItem>
  ))}
</ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://tenni-mocs.com/cdn/shop/products/w1080e12_2_480x480.jpg?v=1667938474',
    title: 'New Balabce 1080 BLACK WITH PIXEL GREEN"',
    price: '3,000',
    size: '9.5',
    author: '@bkristastucchio',
  },

  {
    img: 'https://tenni-mocs.com/cdn/shop/files/1001498_pair_480x480.jpg?v=1712354865',
    title: 'Birkenstock ARIZONA EVA SANDAL IN ANTHRACITE"',
    price: '2,490',
    size: '7',
    author: '@bkristastucchio',
  },

  {
    img: 'https://static.wixstatic.com/media/eb4c75_c9152eea77b141d3be1c7d3169f00f51~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eb4c75_c9152eea77b141d3be1c7d3169f00f51~mv2.png',
    title: 'MSCHF WAVY BABY x Tyga SNEAKER',
    price: '16,900',
    size: '12',
    author: '@bkristastucchio',
  },

  {
    img: 'https://racquetguys.ca/cdn/shop/products/33888-DEFAULT-m_1024x1024.jpg?v=1666885187',
    title: "Nike Court Zoom NXT Men's Tennis",
    price: '3,200',
    size: '8',
    author: '@bkristastucchio',
  },

  {
    img: 'https://keeshoes.com/a/ale/auction_image/image1_187907.s790/on-running-cloudstratus-3-w-3wd30121234-running-shoes-grey-790x790.jpeg?_=1705739986.57639481',
    title: 'On Running Cloudstratus 3 ',
    price: '5,600',
    size: '9',
    author: '@bkristastucchio',
  },

  {
    img: 'https://www.tennisplaza.com/prodimages/38866-DEFAULT-m.jpg',
    title: "Nike Air Zoom Vapor 11",
    price: '2,400',
    size: '11.5',
    author: '@bkristastucchio',
  },

  {
    img: 'https://www.tennisplaza.com/prodimages/38874-DEFAULT-m.jpg',
    title: "Nike Air Zoom GP Turbo Naomi Osaka' ",
    price: '3,100',
    size: '4.5',
    author: '@bkristastucchio',
  },

  {
    img: 'https://cdn.shopify.com/s/files/1/2155/1143/products/eyJ3Ijo0ODAsImgiOjQ4MCwic2NvcGUiOiJhcHAifQ_08b1277b-e287-422f-83cc-d5fc7ed39454_600x.webp?v=1676946244',
    title: "New Balance 1906 Nightwatch Green",
    price: '5,400',
    size: '9.5',
    author: '@bkristastucchio',
  },

  {
    img: 'https://cdn.shopify.com/s/files/1/2155/1143/products/eyJ3Ijo0ODAsImgiOjQ4MCwic2NvcGUiOiJhcHAifQ_-1_40d64494-3041-4cb0-a8cd-8c8c5b0ac2ac_600x.webp?v=1676945364',
    title: "New Balance 1906 Mindful Grey ",
    price: '5,400',
    size: '9',
    author: '@bkristastucchio',
  },


];
