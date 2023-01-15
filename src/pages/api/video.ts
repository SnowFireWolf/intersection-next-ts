import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  src: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // i got source mediaLink from https://cloud.google.com/storage/docs/json_api/v1/objects/get?apix_params=%7B%22bucket%22%3A%22meshmallow-dev%22%2C%22object%22%3A%22temp%2Fdemo.mp4%22%7D
  res.status(200).json({ src: "https://content-storage.googleapis.com/download/storage/v1/b/meshmallow-dev/o/temp%2Fdemo.mp4?generation=1673609696964104&alt=media" });

  // res.status(200).json({ src: "https://storage.googleapis.com/meshmallow-dev/temp/demo.mp4" });
  // res.status(200).json({ src: "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4" })
}
