import React from 'react'

function SketchfabViewer({ link }) {
    return (
        <div class="sketchfab-embed-wrapper ">
            <iframe
                className='box  mx-auto w-full laptop:w-[100vh] laptop:h-[50vh]'
                title="Arham Shop"
                frameborder="0"
                allowfullscreen mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; 
fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share

                src={link}>

            </iframe>
        </div>
    )
}

export default SketchfabViewer