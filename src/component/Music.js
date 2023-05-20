import React, { useState } from "react";
const convertToEmbed = (url) => {
  let id = url.split("v=")[1];
  const ampersandPosition = id.indexOf("&");
  if (ampersandPosition !== -1) {
    id = id.substring(0, ampersandPosition);
  }
  return {link:"https://www.youtube.com/embed/" + id, id};
};
function extractSrcFromEmbedCode(embedCode) {
    const doc = new DOMParser().parseFromString(embedCode, 'text/html');
    const iframe = doc.querySelector('iframe');
    return iframe ? iframe.src : '';
}
const Music = ({setMusicThumbnail, onCloseMusic}) => {
  const [src, setSrc] = useState(
    "https://open.spotify.com/embed/playlist/37i9dQZF1DWWL9r8zcBUMO?utm_source=generator&theme=0"
  );

  const onSubmitLinkHandler = (e) => {
    e.preventDefault(); // prevent the default form submission
    let newLink = e.target.elements.link.value;
    if (newLink.startsWith("<iframe")) newLink = extractSrcFromEmbedCode(newLink);
    if (newLink.includes("youtube.com") && !newLink.includes("embed")) {
        const linkAndId =  convertToEmbed(newLink);
        newLink = linkAndId.link;
        setMusicThumbnail(`https://i.ytimg.com/vi/${linkAndId.id}/hqdefault.jpg`)
    } else if (newLink.includes("spotify")) {
        setMusicThumbnail("https://e1.pngegg.com/pngimages/893/800/png-clipart-spotify-for-os-x-el-capitan-spotify-icon.png")
    } else {
        setMusicThumbnail("https://i.ytimg.com/vi/JxJVQvuVlnU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKwkBIDkwqQtdnJ1yVCFB5FPYeag")
    }
    setSrc(newLink);
};

  return (
    <div className="absolute -top-[19rem] -left-1/3  h-72 w-80 bg-slate-800 rounded-lg py-2 px-4">
      <div className="flex justify-between items-center border-b border-slate-200 py-1">
        <p className="test-xs font-medium text-slate-300">Music</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-slate-300 rounded-full hover:bg-slate-600"
          onClick={onCloseMusic}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <form onSubmit={onSubmitLinkHandler} className="mt-2">
        <input
          name="link"
          type="text"
          autoComplete="off"
          className="bg-slate-800 border border-slate-200 rounded-lg w-full text-slate-200 py-0.5 px-1"
          placeholder="Enter a link to a youtube, spotify"
        />
      </form>
      <iframe
        title="youtube video"
        className="relative mt-2 w-72 h-48 rounded-lg"
        src={src}
      />
    </div>
  );
};

export default Music;
