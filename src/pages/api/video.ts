import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  src: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ src: "https://reurl.cc/58QGAV" })
  res.status(200).json({ src: "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4" })
}
