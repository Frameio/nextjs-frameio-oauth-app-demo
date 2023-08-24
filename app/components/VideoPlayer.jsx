'use client'

import { useRef } from "react";
import VideoJS from "./VideoJsReact";


export const VideoPlayer = (props) => {
    const { title, sbwEnabled, fWatermarkingEnabled, hls, posterImage } = props;

    console.log('posterImage', posterImage);

    const playerRef = useRef(null);

    // Chromecast plugin disabled until this gets merged - https://github.com/silvermine/videojs-chromecast/pull/118

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        // techOrder: [ 'chromecast', 'html5' ],
        poster: posterImage,
        preload: 'metadata',
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
        //         https://github.com/silvermine/videojs-chromecast/issues/123#issuecomment-1218379735
        //         modifyLoadRequestFn: function (loadRequest) {
        //             loadRequest.media.hlsSegmentFormat = 'fmp4';
        //             loadRequest.media.hlsVideoSegmentFormat = 'fmp4';
        //                 return loadRequest;
        //          },
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