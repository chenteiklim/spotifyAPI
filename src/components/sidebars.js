// Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';
import spotifyIcon from '../assets/spotify.png';
import playlistIcon from '../assets/playlist-icon.png';
import plusIcon from '../assets/plus-icon.png';
import loveIcon from '../assets/love-icon.jpg';
import homeIcon from '../assets/homeIcon.png';
import searchIcon from '../assets/searchIcon.jpg';



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="spotify">
        <img className="spotify-icon" src={spotifyIcon} alt="spotify" />
        <h4 className="spotify-text">Spotify</h4>
      </div>
      <div className="sidebar-items">
        <div className="home">
          <img className="home-icon" src={homeIcon} alt="Create Playlist" />
          <a className="home-link" href="#">Home</a>
        </div>
        <div className="search">
          <img className="search-icon" src={searchIcon} alt="Create Playlist" />
          <a className="search-link" href="#">Search</a>
        </div>
        <div className="library">
          <img className="library-icon" src={playlistIcon} alt="Library" />
          <a className="library-link" href="#">Your Library</a>
        </div>
        <div className="playList">
          <img className="playList-icon" src={plusIcon} alt="Create Playlist" />
          <a className="playList-link" href="#">Create Playlist</a>
        </div>
        <div className="love">
          <img className="love-icon" src={loveIcon} alt="Liked Songs" />
          <a className="love-link" href="#">Liked Songs</a>
        </div>
      </div>
      <div className="footer">
        <a className="cookies" href="#">Cookies</a>
        <a className="privacy" href="#">Privacy</a>
      </div>
    </aside>
  );
};

export default Sidebar;