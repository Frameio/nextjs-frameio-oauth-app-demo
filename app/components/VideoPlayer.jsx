'use client'

import MuxVideo from "@mux/mux-video-react";

export const VideoPlayer = (props) => {
    console.log(props)
    const { sbwEnabled, fWatermarkingEnabled, hls } = props;
    return (
        <div className="container">
            {/* <h3>Is Session Based Watermarked: {sbwEnabled.toString()}</h3>
            <h3>Is Forensically Watermarked: {fWatermarkingEnabled.toString()}</h3> */}
            <MuxVideo
                theme="minimal"
                style={{ height: "100%", maxWidth: "100%" }}
                src={hls}
                controls={true}
                autoPlay
                type="hls"
                muted
            />
        </div>

    )
}