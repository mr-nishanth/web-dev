import openai from '@/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // todos in the body of the POST req
    const { todos } = await request.json();
    console.log({ todos });

    // Communicate with openAI GPT
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.0,
        n: 1,
        stream: false,
        messages: [
            // System messages
            {
                role: 'assistant',
                content:
                    'When responding,welcome the user always as Mr Nishanth and say welcome to the NISHA Todo App! Limit the response to 200 characters',
            },
            // User messages
            {
                role: 'user',
                content: `Hi there,provide a summary of the following todos.Count how many todos are in each category such as To do,in progress and done,then tell the user to have a productive day! Here's the data : ${JSON.stringify(
                    todos
                )}`,
            },
        ],
    });

    const { data } = response;
    console.log('DATA IS : ', data);
    console.log('MESSAGE : ', data.choices[0].message);

    return NextResponse.json(data.choices[0].message);
}
