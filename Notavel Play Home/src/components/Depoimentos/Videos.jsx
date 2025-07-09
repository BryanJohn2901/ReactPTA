import React, { useState } from 'react'

const Videos = () => {
  const [modalUrl, setModalUrl] = useState(null)

  const videos = [
    {
      capa: '/capaVideos/capaVideo01.webp',
      url: 'https://www.youtube.com/embed/ftOkOCoWOWs?autoplay=1',
    },
    {
      capa: '/capaVideos/capaVideo02.webp',
      url: 'https://www.youtube.com/embed/ulw9iUVy4sw?autoplay=1',
    },
    {
      capa: '/capaVideos/capaVideo03.webp',
      url: 'https://www.youtube.com/embed/2eVmsAdQqiw?autoplay=1',
    },
  ]

  return (
    <div className="w-full bg-white py-16 px-4 text-center">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setModalUrl(video.url)}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={video.capa}
              alt={`Vídeo ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalUrl && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src={modalUrl}
              title="Vídeo YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setModalUrl(null)}
              className="absolute -top-6 -right-6 bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Videos