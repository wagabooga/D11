import React, { useState } from "react";
import HeroButton from "./buttons/HeroButton";

// does cody want to be able to change hours/contact?
// TODO: find map library
// BUG: d11 logo from footer showing up when you scroll down to the footer after opening the nav menu on mobile- might have to do with mix-blend-mode on the logo so maybe i'll just replace the logo using the same $black we use

const Footer: React.FC = () => {

  const instagramLink = "https://www.instagram.com/_districteleven/";
  const tikTokLink = "https://www.tiktok.com/@_districteleven";

  return (
    <div className="footer">

      <div className="footer_top">
        <div className="footer_top_info">
          <div className="footer_top_info_item">
            <h1 className="footer_top_info_item_header">HOURS</h1>
            <div className="footer_top_info_item_content">
              <p><strong>Fri & Sat:</strong> 5 pm - 2 pm</p>
              <p><strong>Tues, Wed, Thurs:</strong> 5 pm - 1 am</p>
              <p><strong>Sun:</strong> 5pm - 12am</p>
              <p><strong>Mon:</strong> Closed</p>
            </div>
          </div>
          <div className="footer_top_info_item">
            <h1 className="footer_top_info_item_header">LOCATION</h1>
            <div className="footer_top_info_item_content">
              <p>4063 Main Street, Vancouver, BC</p>
            </div>
          </div>
          <div className="footer_top_info_item">
            <h1 className="footer_top_info_item_header">CONTACT</h1>
            <div className="footer_top_info_item_content">
              <p>604.566.2021</p>
              <p>districteleven_@outlook.com</p>
            </div>
          </div>
        </div>

        <img
          src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+d3af37(-123.10140314000238,49.249254171474)/-123.1015,49.2493,12.98,0/1000x1000@2x?access_token=pk.eyJ1Ijoia2FzZXl2ZWUiLCJhIjoiY2xmdWRhdDR4MDF3MzNobzgyMnRjMmtsMyJ9.fKYQPJBIZ_aO7UNqll1q4A"
          className="footer_top_map"
        />
      </div>

      <div className="footer_bottom">
        <div>© 2021 District Eleven</div>
        <img
          src="src/assets/logo.svg"
          className="footer_bottom_logo"
        />
        <div className="footer_bottom_socials">
          <HeroButton
            to={instagramLink}
            color="yellow"
            children="Instagram"
            className="footer-button"
          />
          <HeroButton
            to={tikTokLink}
            color="yellow"
            children="Tiktok"
            className="footer-button"
          />
        </div>
      </div>

    </div>
  );
}

export default Footer;