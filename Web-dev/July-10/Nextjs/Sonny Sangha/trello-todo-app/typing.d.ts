interface Board {
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = 'todo' | 'inprogress' | 'done';

interface Column {
    id: TypedColumn;
    todos: Todo[];
}

// Responses from the server (AppWrite)
interface Todo {
    $id: string;
    $createdAt: string;
    titles: string;
    status: TypedColumn;
    image?: Image;
}

interface Image {
    bucketId: string;
    fileId: string;
}
