import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { password, email } = reqBody;
        console.log({ loginReq: reqBody });
        // Check if the already existing
        const existingUser = await User.findOne({ email: email });
        if (!existingUser)
            return NextResponse.json(
                { message: 'Invalid Credentials' },
                { status: 400 }
            );

        // Check if the password is correct
        const validPassword = await bcryptjs.compare(
            password,
            existingUser?.password
        );
        if (!validPassword)
            return NextResponse.json(
                { message: 'Invalid Credentials' },
                { status: 400 }
            );

        // create token data
        const tokenData = {
            id: existingUser?._id,
            username: existingUser?.username,
            email: existingUser?.email,
        };
        // create the token
        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET!, {
            expiresIn: '1d',
        });

        const response = NextResponse.json({
            message: 'Login successful',
            success: true,
        });
        response.cookies.set('token', token, { httpOnly: true });
        return response;
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}
