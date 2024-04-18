import React from "react";
import './Sidebar.css';

import { FaSpotify,FaSearch  } from "react-icons/fa";
import { IoHome  } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";

function Sidebar() {
    return (
        <div className="Sidebar">
      <div className="logo">
        <a href="#">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
        </a>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="fa fa-home"></span>
              <span>Home</span>
            </a>
          </li>

         

          <li>
            <a href="#">
              <span className="fa fas fa-book"></span>
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="fa fas fa-plus-square"></span>
              <span>Create Playlist</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="fa fas fa-heart"></span>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="policies">
        <ul>
          
        </ul>
      </div>
    </div> 
    );
}
export {Sidebar}