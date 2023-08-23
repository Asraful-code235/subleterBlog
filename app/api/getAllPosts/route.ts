import { NextResponse, NextRequest } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET(request: NextRequest) {
  try {
    const query = `
    *[_type == "post" ]  | order(publishedAt desc) {
      ...,
      author->{name,image,...},
      categories[]->{
        title,
        ref
      }
    }
  `;
    const response = await client.fetch(query);
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
