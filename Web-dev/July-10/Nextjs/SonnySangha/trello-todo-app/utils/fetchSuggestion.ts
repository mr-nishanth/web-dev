import { formatTodoForAI } from './formatTodoForAI';

export const fetchSuggestion = async (board: Board) => {
    const todos = formatTodoForAI(board);
    console.log({ formatTodoToSent: todos });

    try {
        const result = await fetch('/api/generateSummary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ todos }),
        });

        const GPTdata = await result.json();
        console.log({ GPTdata });
        const { content, data } = GPTdata;
        console.log({ content });
        console.log({ data });

        return content;
    } catch (error) {
        console.log({ error });
    }
};
