// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const host = req.headers.host;
  let subdomain = process.env.STORE_NAME;
  // if (host && host != 'localhost:3000') {

  // }
  // const url = new URL(req.url!);
  console.log('BOOP', req.headers.host);
  // console.log(req.url);
  res.status(200).json({ name: req.headers.host! });
}
