import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const inventoryItems = await prisma.inventoryItem.findMany();
    return NextResponse.json({ inventoryItems }, { status: 200 });
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    return NextResponse.json({ error: 'Failed to fetch inventory items' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
