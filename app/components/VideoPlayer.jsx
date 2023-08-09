'use client'

import { useRef } from "react";
import VideoJS from "./VideoJsReact";


export const VideoPlayer = (props) => {
    const { title, sbwEnabled, fWatermarkingEnabled, hls } = props;

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: hls,
            type: 'application/x-mpegURL',
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

    return (
        <div className="container" style={{ paddingBottom: '3rem' }}>
            <h2 className="text-lg" style={{ paddingBottom: '1rem' }}><b>{title}</b></h2>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    )
}