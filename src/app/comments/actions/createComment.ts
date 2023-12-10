'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { initialState } from "../components/Form";
export async function createComment(prevState: initialState, formData: FormData) {
  try {
    // console.log("prev state", prevState);
    // const rawFormData = {
    //   name: formData.get('name'),
    //   content: formData.get('content'),
    // };
    // const data: {
    //   name: string, content: string
    // } = JSON.parse(JSON.stringify(rawFormData))
    const name = formData.get('name')?.toString();
    const content = formData.get('content')?.toString();
    if (!name || !content) {
      return {
        statusCode: 400,
        message: "Name and content is required"
      }
    } else {
      await sql`INSERT INTO Comments (Name, Content, CreatedAt) VALUES (${name}, ${content}, ${JSON.stringify(new Date())});`;
      // console.log(result);
      revalidatePath("/comments")
      return {
        statusCode: 200,
        message: "Success"
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        statusCode: 500,
        message: error.message
      }
    }
    return {
      statusCode: 500,
      message: JSON.stringify(error)
    }
  }
}