export default function Page() {
  const videos = [
    { id: "Iq_K5LWwuZc", title: "VR Brain Surgery" },
    { id: "-mbLgfKteow", title: "Iqraversity" },
    { id: "CatBYE38mm4", title: "VR Tank Simulation" }
  ];

  return (
    <div className="flex flex-col items-center p-4 space-y-8 gap-10">
      {/* <div className="text-6xl font-bold" style={{ color: "white" }}>VR Portfolio</div> */}

      {videos.map((video) => (
        <div key={video.id} className="w-full max-w-4xl aspect-video p-2 my-10">
          <div className="text-4xl font-bold text-white text-center mb-4" style={{ color: "white" }}>{video.title}</div>
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            title={video.title}
            src={`https://youtube.com/embed/${video.id}?rel=0&controls=1&showinfo=0&modestbranding=1`}
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}
