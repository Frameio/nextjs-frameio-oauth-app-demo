import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { VideoPlayer } from '@/app/components/VideoPlayer';

let accessToken;

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/protected/server')
  }

  console.log('session', session);
  console.log('accesToken', session.accessToken)

  const headers = {
    'Authorization': `Bearer ${session.accessToken}`
  }

  const reviewLinkInfoRequest = await fetch('https://api.frame.io/v2/review_links/e0114ea8-f283-43ad-91c6-011fa7cfdcbf', { method: 'GET', headers: headers })
  const reviewLinkInfo = await reviewLinkInfoRequest.json()

  const reviewLinkAssetsRequest = await fetch('https://api.frame.io/v2/review_links/e0114ea8-f283-43ad-91c6-011fa7cfdcbf/items/shared?page=1&page_size=50', { method: 'GET', headers: headers })
  const reviewLinkAssets = await reviewLinkAssetsRequest.json();

  console.log(reviewLinkAssets)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Accessing asset using the following Frame.io account:</h1>
        {/* <form>
          <input width={600} type='text' placeholder='Enter a review link ID'></input>
        </form> */}
        <p className='mt-4'>{session?.user?.email}</p>
        <div className='container py-24' style={{ width: '80vw', overflow: 'scroll' }}>
          {/* <code>
            {JSON.stringify(reviewLinkAssets)}
          </code> */}
          {reviewLinkAssets?.map((asset) => {
            // const item = asset.asset
            // console.log(item?.hls_manifest)
            if (asset.asset.hls_manifest) {
              return (
                <VideoPlayer
                  key={asset.asset.asset_id}
                  hls={asset.asset.hls_manifest}
                  title={asset.asset.name}
                  fWatermarkingEnabled={asset.asset.is_forensically_watermarked}
                  sbwEnabled={asset.asset.is_session_watermarked}
                />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default ServerProtectedPage
