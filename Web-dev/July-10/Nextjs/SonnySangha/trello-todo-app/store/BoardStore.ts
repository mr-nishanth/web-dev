import { databases } from '@/appwrite';
import { getTodosGroupByColumn } from '@/utils/getTodosGroupByColumn';
import { create } from 'zustand';

interface BoardStore {
    board: Board;
    getBoard: () => Promise<void>;
    setBoardState: (board: Board) => void;
    updateTodoInDB: (todo: Todo, columnId: TypedColumn) => Promise<void>;

    searchString: string;
    setSearchString: (searchString: string) => void;
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

    updateTodoInDB: async (todo, columnId) => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id,
            {
                title: todo.title,
                status: columnId,
            }
        );
    },

    searchString: '',
    setSearchString: (searchString) => set({ searchString }),
}));
