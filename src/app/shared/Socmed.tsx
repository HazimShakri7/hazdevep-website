import React from "react";

export default function Socmed() {
  return (
    <div className="flex mt-8 space-x-6">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/hazimshakri/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-transparent border-2 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-125 hover:bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:border-transparent"
        title="Instagram"
      >
        <i className="fab fa-instagram text-2xl text-white"></i>
      </a>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/19FWH1cziE/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-transparent border-2 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-125 hover:bg-blue-600 hover:border-transparent"
        title="Facebook"
      >
        <i className="fab fa-facebook text-2xl text-white"></i>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@07haz70?_t=8sizNPRJnOr&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-transparent border-2 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-125 hover:bg-black hover:border-transparent"
        title="TikTok"
      >
        <i className="fab fa-tiktok text-2xl text-white"></i>
      </a>
      {/* Discord */}
      <a
        href="https://discord.gg/rCECaAmd"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-transparent border-2 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-125 hover:bg-blue-500 hover:border-transparent"
        title="Discord"
      >
        <i className="fab fa-discord text-2xl text-white"></i>
      </a>

      {/* Youtube */}
      <a
        href="https://www.youtube.com/@HazDev7?app=desktop"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-transparent border-2 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-125 hover:bg-red-600 hover:border-transparent"
        title="Youtube"
      >
        <i className="fab fa-youtube text-2xl text-white"></i>
      </a>
    </div>
  );
}
