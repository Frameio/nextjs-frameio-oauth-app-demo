'use client'

import { useSession, getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import MuxVideo from "@mux/mux-video-react";
import "@mux/mux-player/themes/minimal";
import { useEffect, useCallback, useState } from 'react';

const Video1Page = async () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin?callbackUrl=/protected/player/video_1')
        }
    });

    const [reviewLinkInfo, setReviewLinkInfo] = useState();

    // const fetchData = useCallback(async () => {
    //     const reviewLinkInfoRequest = await fetch('https://api.frame.io/v2/review_links/e0114ea8-f283-43ad-91c6-011fa7cfdcbf', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${session?.accessToken}`
    //         },
    //         cache: 'no-store' 
    //     })
    //     const data = await reviewLinkInfoRequest.json()
    //     setReviewLinkInfo(data);

    // }, [status])

    // useEffect(() => {
    //     fetchData()

    // }, [fetchData])

    const fetchData = async () => {
        // const reviewLinkInfoRequest = await fetch('https://api.frame.io/v2/review_links/e0114ea8-f283-43ad-91c6-011fa7cfdcbf', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${session?.accessToken}`
        //     }
        // })
        // const data = await reviewLinkInfoRequest.json()

        const data = await fetch("/api/frameapi", { credentials: 'include' });
        const json = await data.json();
        setReviewLinkInfo(json);
    };

    fetchData()
        // make sure to catch any error
        .catch(console.error);;


    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>
                    {JSON.stringify(reviewLinkInfo)}
                </h1>
                THIS IS A PAGE
                {/* <h2 className='mt-4 font-medium'>You are logged in as:</h2> */}
                {/* <p className='mt-4'>{session?.user?.name}</p> */}
                {/* <MuxVideo
                    theme="minimal"
                    style={{ height: "100%", maxWidth: "100%" }}
                    src="https://stream.frame.io/manifest/hls/master?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE1NTQyMjksInN1YiI6eyJhdWRpbyI6WyJzMzovL2ZyYW1laW8tYXNzZXRzLXByb2R1Y3Rpb24vZW5jb2RlLzFiMjJiMTBmLWQyZTItNDg1Mi1hN2ViLTc0YTIxNTAwYzhmYi9oMjY0XzM2MC5tcDQiXSwiaWQiOiIxYjIyYjEwZi1kMmUyLTQ4NTItYTdlYi03NGEyMTUwMGM4ZmIiLCJ1c2VyX2NvbmZpZyI6eyJhY2NvdW50X2lkIjoiMmM4NWExODItOTUxNi00YjNjLTg2ZmYtODRkMzFlYmE1YWUyIiwiYXNzZXRfaWQiOiIxYjIyYjEwZi1kMmUyLTQ4NTItYTdlYi03NGEyMTUwMGM4ZmIiLCJwbGF5ZXJfdHlwZSI6ImludGVybmFsIiwicHJlc2VudGF0aW9uX2lkIjpudWxsLCJwcm9qZWN0X2lkIjoiNzRkYTQ1NmMtMjY3MC00NGI5LWEyMDktOWMxZjdjZjgxM2EzIiwicmV2aWV3X2xpbmtfaWQiOm51bGwsInNlc3Npb25faWQiOiIwNjM1NDU1MzE5MjQ0N2QwMjllZjJmMDE1YWZiMzA0NDk3OGI3Y2ZlIiwidGVhbV9pZCI6IjA5ZDBjMDg0LTcwM2EtNDQ4OC1hOTJiLWQ1MzU1N2RkZWM1YyIsInVzZXJfaWQiOiJlZWZiNTdlMC03OWYyLTRiYzctOWI3MC05OWZiYzE3NTE3NWMifSwidmlkZW8iOlsiczM6Ly9mcmFtZWlvLWFzc2V0cy1wcm9kdWN0aW9uL2VuY29kZS8xYjIyYjEwZi1kMmUyLTQ4NTItYTdlYi03NGEyMTUwMGM4ZmIvaDI2NF8zNjAubXA0IiwiczM6Ly9mcmFtZWlvLWFzc2V0cy1wcm9kdWN0aW9uL2VuY29kZS8xYjIyYjEwZi1kMmUyLTQ4NTItYTdlYi03NGEyMTUwMGM4ZmIvaDI2NF81NDAubXA0IiwiczM6Ly9mcmFtZWlvLWFzc2V0cy1wcm9kdWN0aW9uL2VuY29kZS8xYjIyYjEwZi1kMmUyLTQ4NTItYTdlYi03NGEyMTUwMGM4ZmIvaDI2NF83MjAubXA0IiwiczM6Ly9mcmFtZWlvLWFzc2V0cy1wcm9kdWN0aW9uL2VuY29kZS8xYjIyYjEwZi1kMmUyLTQ4NTItYTdlYi03NGEyMTUwMGM4ZmIvaDI2NF8xMDgwX2Jlc3QubXA0Il19fQ.MjsXe8r8rhMcRfKAQD78PGzLTVE3jKbf0WFgg_FdgGg"
                    controls={true}
                    autoPlay
                    type="application/vnd.apple.mpegurl"
                    loop
                    muted
                /> */}
            </div>
        </section>
    )
}

export default Video1Page;
