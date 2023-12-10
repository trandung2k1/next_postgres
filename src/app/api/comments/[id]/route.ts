import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"
type Context = {
    params: {
        id: string,
    }
}
export async function GET(request: Request, context: Context) {
    const rs = await sql`SELECT * FROM comments WHERE id =${context.params.id};`
    const data = rs.rows
    if (!data.length) {
        return NextResponse.json({
            message: "Not found",
        }, {
            status: 404,
        })
    }
    return NextResponse.json(data[0], { status: 200 })
}