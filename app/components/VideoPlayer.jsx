'use client'

import { useRef } from "react";
import VideoJS from "./VideoJsReact";


export const VideoPlayer = (props) => {
    const { title, sbwEnabled, fWatermarkingEnabled, hls } = props;

    const playerRef = useRef(null);

    // Chromecast plugin disabled until this gets merged - https://github.com/silvermine/videojs-chromecast/pull/118

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        // techOrder: [ 'chromecast', 'html5' ],
        sources: [{
            src: hls,
            type: 'application/x-mpegURL',
        }],
        html5: {
            hls: {
                overrideNative: true
            }
        },    
        // plugins: {
        //     chromecast: {
        //         addCastLabelToButton: true,
        //     },
        // }    
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