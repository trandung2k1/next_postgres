export const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5000",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
import { NextResponse } from 'next/server';
export async function GET(request: Request) {

  const origin = request.headers.get('origin');
  console.log(origin);
  return NextResponse.json({
    message: 'Hello, Next.js!'
  })
}