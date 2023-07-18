import { getTodosGroupByColumn } from '@/utils/getTodosGroupByColumn';
import { create } from 'zustand';

interface BoardStore {
    board: Board;
    getBoard: () => Promise<void>;
    setBoardState: (board: Board) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
    board: {
        columns: new Map<TypedColumn, Column>(),
    },
    getBoard: async () => {
        const board = await getTodosGroupByColumn();
        set({ board });
    },

    setBoardState: (board) => set({ board }),
}));
