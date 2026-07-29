import React from 'react';

export default function MapEmbed() {
  return (
    <div className="w-full h-full min-h-[350px] bg-slate-100 rounded-2xl overflow-hidden shadow-md relative border border-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6504813589!2d54.947291167448835!3d25.07638146747514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43403a588379%3A0x96b3e24a1d4afe70!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '350px' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="AC Service Coverage Map Dubai UAE"
      ></iframe>
      
      {/* Overlay Badge */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur shadow-md px-4 py-2 rounded-xl border border-gray-100">
        <p className="text-xs font-bold text-slate-800 flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-trust-green inline-block mr-2 animate-ping"></span>
          24/7 Dubai Service Coverage
        </p>
      </div>
    </div>
  );
}
