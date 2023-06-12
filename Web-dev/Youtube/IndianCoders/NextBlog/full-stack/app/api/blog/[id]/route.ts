import prisma from '@/prisma';
import { NextResponse } from 'next/server';
import { main } from '../route';

export const GET = async (req: Request, res: NextResponse) => {
    try {
        const id = req.url.split('/blog/')[1];
        console.log('GET request with id: ' + id);
        await main();
        const post = await prisma.post.findFirst({ where: { id: id } });
        if (!post)
            return NextResponse.json({ message: 'Not Found' }, { status: 404 });
        return NextResponse.json({ message: 'Success', post }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error', error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const PUT = async (req: Request, res: NextResponse) => {
    try {
        const id = req.url.split('/blog/')[1];
        console.log('PUT request with id: ' + id);
        const { title, description } = await req.json();

        await main();

        const post = await prisma.post.update({
            data: { title, description },
            where: { id: id },
        });

        return NextResponse.json(
            { message: 'Update Success', post },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Update Error', error },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
};

export const DELETE = async (req: Request, res: NextResponse) => {
    const id = req.url.split('/blog/')[1];
    console.log('DELETE request with id: ' + id);
    try {
        await main();
        const post = await prisma.post.delete({ where: { id: id } });
        return NextResponse.json({ message: 'Success', post }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error', error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
