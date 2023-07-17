import { getTodosGroupByColumn } from '@/libs/getTodosGroupByColumn';
import { Board, Column, TypedColumn } from '@/typing';
import { create } from 'zustand';

interface BoardStore {
    board: Board;
    getBoard: () => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
    board: {
        columns: new Map<TypedColumn, Column>(),
    },
    getBoard: async () => {
        const board = await getTodosGroupByColumn();
        set({ board });
    },
}));
