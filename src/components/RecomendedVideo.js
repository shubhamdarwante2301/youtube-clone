import React from 'react'

const image =
  "https://i.ytimg.com/vi/jvoOgxK4EvI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3-6lAZ85ANpKpMSz1aU_RY1-rPA";
const RecomendedVideo = () => {
    return (
        <div className="flex flex-col sm:flex-row xl:grid xl:grid-cols-2 mb-4">
            <div className="mr-2 max-w-[300px]">
                <img src={image} alt="" className="rounded-xl"/>
            </div>
            <div>
                <p>Relaxing music that heals stress, anxiety and ... </p>
                <p className="text-gray-400">Tranquil Paradise</p>
                <p className="text-gray-400">92.31k views.8 days ago</p>
            </div>
        </div>
    )
}

export default RecomendedVideo
