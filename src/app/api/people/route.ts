import { people } from '@/app/data/people'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return  NextResponse.json(people)
}