import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 100,
  height: 60,
  '& .MuiSwitch-thumb': {
    width: 40,
    height: 40,
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(40px)', 
  },
  '& .MuiSwitch-track': {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'dark' ? '#B5B5B5' : '#8A8A8A',
  },
}));


const TopNav = ({weatherData, setWeatherData, currentCity, setCurrentCity, isCelsius, setIsCelsius}) => {
   const [newCity, setNewCity] = useState("");
    const handleSwitchChange = () => {
      setIsCelsius((prev) => !prev);
    };
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=1e76f4166e7ac1e5f82edde1a9d5433b&units=metric`
        );
        setWeatherData(response.data);
        setCurrentCity(newCity); 
      } catch (error) {
        console.log("error")
      }
    };
  
  return (
    <nav className='nav flex items-center justify-between'>
    <form
      action=""
      className='search-form'
      onSubmit={(e) => {
        handleSearch(e);
        setNewCity("");
      }}
    >
      <input
        className='search-input'
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <button className='search-btn'>
        <AiOutlineSearch size={30} />
      </button>
    </form>
    <div className='switch'>
      <CustomSwitch {...label} checked={isCelsius} onChange={handleSwitchChange} color='default' />
      <span>{isCelsius ? '°C' : '°F'}</span>
    </div>
  </nav>
  
  )
}

export default TopNav