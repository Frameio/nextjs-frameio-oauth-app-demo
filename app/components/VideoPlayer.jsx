'use client'

import { useRef } from "react";
import VideoJS from "./VideoJsReact";


export const VideoPlayer = (props) => {
    const { title, sbwEnabled, fWatermarkingEnabled, hls } = props;

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: hls,
            type: 'application/x-mpegURL',
            // type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };



    console.log(props)
    return(
        <div className="container">
            {/* <MuxVideo
                theme="minimal"
                style={{ height: "100%", maxWidth: "100%" }}
                src={hls}
                controls={true}
                autoPlay
                type="hls"
                muted
            /> */}
            <h2>{title}</h2>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            <h3>Is Session Based Watermarked: {sbwEnabled.toString()}</h3>
            <h3>Is Forensically Watermarked: {fWatermarkingEnabled.toString()}</h3>
        </div>
    )
}