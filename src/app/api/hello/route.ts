import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    name: 'Pretom Areefin Pranto',
    status: 'Alive'
  }

  return NextResponse.json(data)
}
