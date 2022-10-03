// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

/**
 *
 * @param req : FrontEnd에서 넘어오는 데이터 값이 들어있습니다.
 * @param res : 데이터가 정상적으로 저장되었는지에 대한 응답값을 보냅니다.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = validateReqBody(req);
}

async function validateReqBody(query: any) {
  return await yup
    .object({
      ipAddress: yup.string().required(),
      name: yup.string().required(),
      text: yup.string().required(),
    })
    .validate(query)
}
