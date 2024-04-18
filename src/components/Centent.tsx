import React, { useState } from "react";
import './Centent.css';
import Card from '@mui/material/Card';  
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { getUserDetails ,getMyRecentlyPlayedTracks} from '../UserDetails';

import { useQuery } from 'react-query';

interface PlaylistItemProps {
  title: string;
  description: string;
  image: string;
}

function PlaylistItem(props: PlaylistItemProps) {
  const { title, description, image } = props;
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#000000" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
function Centent() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: recentlyPlayedTracks} = useQuery(
    ['getMyRecentlyPlayedTracks'],
    () => getMyRecentlyPlayedTracks(),
    
  );
  const filteredTracks = recentlyPlayedTracks?.items.filter((item) =>
    item.track.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <div className="Centent">
    <div className="main-container">
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
          <div className="search-container">
        <input
        type="text"
        placeholder="Search tracks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      </div>
        </div>

        <div className="navbar">
        
          <ul>
            <li className="divider">|</li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <button type="button">Log In</button>
        </div>
      </div>

      <div className="spotify-playlists">
        <h2>Spotify Playlists</h2>
       
        <div className="list">
          
        {filteredTracks && filteredTracks.map((item, index) => (
            <PlaylistItem
              key={index}
              title={item.track.name}
              description={item.track.artists.map(artist => artist.name).join(', ')}
              // image={item.track.album ? item.track.album.images[0].url : ''}
             image="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
            />
          ))}
        </div>
      </div>

      <div className="spotify-playlists">
        <h2>Focus</h2>
        <div className="list">
        {recentlyPlayedTracks && recentlyPlayedTracks.items.map((item, index) => (
            <PlaylistItem
              key={index}
              title={item.track.name}
              description={item.track.artists.map(artist => artist.name).join(', ')}
              // image={item.track.album ? item.track.album.images[0].url : ''}
              image="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
            />
          ))}
        </div>
      </div>

      <div className="spotify-playlists">
        <h2>Mood</h2>
        <div className="list">
        {recentlyPlayedTracks && recentlyPlayedTracks.items.map((item, index) => (
            <PlaylistItem
              key={index}
              title={item.track.name}
              description={item.track.artists.map(artist => artist.name).join(', ')}
              // image={item.track.album ? item.track.album.images[0].url : ''}
              image="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
            />
          ))}
        </div>

        <hr />
      </div>

      <div className="preview">
        <div className="text">
          <h6>Preview of Spotify</h6>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div className="button">
          <button type="button">Sign up free</button>
        </div>
      </div>
    </div>
      </div>;
}

export default Centent;