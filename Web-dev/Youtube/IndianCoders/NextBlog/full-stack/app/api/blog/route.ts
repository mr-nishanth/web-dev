import prisma from '@/prisma';
import { NextResponse } from 'next/server';

// Connection functions
async function main() {
    try {
        await prisma.$connect();
    } catch (error) {
        return Error('Database connection unsuccessful');
    }
}

export const GET = async (req: Request, res: NextResponse) => {
    console.log('GET request');
    try {
        await main();
        const posts = await prisma.post.findMany();
        return NextResponse.json(
            { message: 'Success', posts },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ message: 'Error', error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const POST = async (req: Request, res: NextResponse) => {
    console.log('POST request');
};
