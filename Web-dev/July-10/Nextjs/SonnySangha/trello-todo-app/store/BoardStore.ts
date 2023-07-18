import { databases, storage } from '@/appwrite';
import { getTodosGroupByColumn } from '@/utils/getTodosGroupByColumn';
import { create } from 'zustand';

interface BoardStore {
    board: Board;
    getBoard: () => Promise<void>;
    setBoardState: (board: Board) => void;
    updateTodoInDB: (todo: Todo, columnId: TypedColumn) => Promise<void>;

    searchString: string;
    setSearchString: (searchString: string) => void;

    deleteTask: (
        taskIndex: number,
        todoId: Todo,
        id: TypedColumn
    ) => Promise<void>;

    newTaskInput: string;
    setNewTaskInput: (newTaskInput: string) => void;
}

export const useBoardStore = create<BoardStore>((set, get) => ({
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

    deleteTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
        const newColumns = new Map(get().board.columns);

        // Delete todoId from newColumns
        newColumns.get(id)?.todos.splice(taskIndex, 1);

        set({ board: { columns: newColumns } });

        if (todo.image) {
            await storage.deleteFile(todo.image.bucketId, todo.image.fileId);
        }

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id
        );
    },

    newTaskInput: '',

    setNewTaskInput: (newTaskInput: string) => set({ newTaskInput }),
}));
