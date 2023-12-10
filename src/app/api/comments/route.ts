import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const rs = await sql`SELECT * FROM comments;`
    return NextResponse.json(rs.rows, { status: 200 })
}