// import React from 'react';

const MapEmbed = () => {
    const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2983846062803!2d77.09965107480855!3d11.016224689147496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8573a63d53761%3A0x414fd63507bd48ea!2sRVS%20Technical%20Campus-%20Coimbatore!5e0!3m2!1sen!2sin!4v1729486240363!5m2!1sen!2sin";

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src={mapURL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapEmbed;



