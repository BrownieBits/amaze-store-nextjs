// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  slug: string;
  logo: string;
  banner: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const slug = process.env.STORE_NAME
    ? process.env.STORE_NAME
    : req.headers.host!.split(' ', 1)[0];
  console.log(slug);
  const storeInfoResp = await fetch(
    `https://commerce.teespring.com/v1/stores?slug=${slug}`
  );
  const themeInfoResp = await fetch(
    `https://kxqd7cf966.execute-api.us-west-1.amazonaws.com/dev/themes?siteKey=${slug}`
  );
  const storeInfo = await storeInfoResp.json();
  const themeInfo = await themeInfoResp.json();
  res
    .status(200)
    .json({
      name: storeInfo.name,
      slug: slug,
      logo: themeInfo.content.header.logo.replace(
        '{{assetPath}}',
        `//premium-storefronts.s3.amazonaws.com/storefronts/${slug}/assets`
      ),
      banner: themeInfo.content.heroBanner.containerBg.replace(
        '{{assetPath}}',
        `//premium-storefronts.s3.amazonaws.com/storefronts/${slug}/assets`
      ),
    });
}
