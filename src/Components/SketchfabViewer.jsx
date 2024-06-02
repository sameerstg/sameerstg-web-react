import React from 'react'

function SketchfabViewer({ link }) {
    return (
        <div className='h-[30vw] ' class="sketchfab-embed-wrapper ">
            <iframe
                className='box h-full   mx-auto w-full  my-auto '
                // title="Arham Shop"
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