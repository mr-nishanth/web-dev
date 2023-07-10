import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, password, email } = reqBody;
        console.log({ signupReq: reqBody });
        // Check if the already existing
        const existingUser = await User.findOne({ email: email });
        if (existingUser)
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );

        // Hash the password
        const salt = await bcryptjs.genSalt(15);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username: username,
            password: hashedPassword,
            email: email,
        });
        const savedUser = await newUser.save();
        console.log(savedUser);
        return NextResponse.json(
            { message: 'User created successfully', success: true, savedUser },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    } finally {
        connect();
    }
}
