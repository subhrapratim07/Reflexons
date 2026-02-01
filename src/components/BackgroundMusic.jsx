import { useRef, useState, useEffect } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bg-music");
    if (saved === "on") {
      audioRef.current.volume = 0.35;
      audioRef.current.play();
      setPlaying(true);
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      localStorage.setItem("bg-music", "off");
    } else {
      audioRef.current.volume = 0.35;
      audioRef.current.play();
      localStorage.setItem("bg-music", "on");
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50
                   bg-cyan-500 text-black font-bold
                   px-4 py-2 rounded-full shadow-lg"
      >
        {playing ? "🔊 Music On" : "🔈 Music Off"}
      </button>
    </>
  );
}
