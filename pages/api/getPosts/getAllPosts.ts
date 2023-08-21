import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const query = `
        *[_type == "post"] | order(publishedAt desc)
         {
          ...,
          author->{name, image}
         
        }
      `;
      const response = await client.fetch(query);

      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching blogs." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
