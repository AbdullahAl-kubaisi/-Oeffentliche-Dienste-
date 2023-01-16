import { Grid } from '@mui/material';
import HomeCard from '../../components/Cards/HomeCard';
import React from 'react';
import personsPng from '../../assets/person.png';
import rolesPng from '../../assets/role.png';
import rosterPng from '../../assets/roster.png';
import locationPng from '../../assets/location.png';
import WeatherPng from '../../assets/weather.png';

const Home = (): JSX.Element => (
  <>
    <div className="flex items-center justify-center mt-24 mb-24">
      <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-sky-800">
        Öffentliche Dienste
      </h1>
    </div>
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="start"
      justifyContent="space-around"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={4}>
        <div className="p-4">
          <HomeCard
            name="Rolen"
            txt="Hier ist eine Liste von verfügbaren Rolen"
            imgSrc={rolesPng}
            path="/roles"
            alt="roles image"
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className="p-4">
          <HomeCard
            name="Benutzern"
            txt="Hier ist eine Liste von verfügbaren Benutzern"
            imgSrc={personsPng}
            path="/persons"
            alt="person image"
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <div className="p-4">
          <HomeCard
            name="Dienstpläne"
            txt="Hier ist eine Liste von verfügbaren Dienstpläne"
            imgSrc={rosterPng}
            path="/rosters"
            alt="roster icons"
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <div className="p-4">
          <HomeCard
            name="Adressen"
            txt="Hier ist eine Liste von verfügbaren Adressen"
            imgSrc={locationPng}
            path="/locations"
            alt="location icons"
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <div className="p-4">
          <HomeCard
            name="Wetter"
            txt="Wetter anchauen"
            imgSrc={WeatherPng}
            path="/weather"
            alt="Wetter icons"
          />
        </div>
      </Grid>
    </Grid>
  </>
);

export default Home;
