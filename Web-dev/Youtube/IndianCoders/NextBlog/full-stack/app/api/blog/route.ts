import prisma from '@/prisma';
import { NextResponse } from 'next/server';

// Connection functions
export async function main() {
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
            { message: 'Success', counts: posts.length, posts },
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
    try {
        const { title, description } = await req.json();

        await main();
        const post = await prisma.post.create({
            data: { title: title, description: description },
        });
        return NextResponse.json({ message: 'Success', post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error', error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
