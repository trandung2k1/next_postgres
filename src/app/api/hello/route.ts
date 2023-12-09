import { NextResponse } from 'next/server';
export async function GET(request: Request) {

  const origin = request.headers.get('origin');
  console.log(origin);
  return NextResponse.json({
    message: 'Hello, Next.js!'
  })
}
