'use client';

// TODO:
// Figure out the error while dragging the column

import { useBoardStore } from '@/store/BoardStore';
import { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

function Board() {
    // const getBoard = useBoardStore((state) => state.getBoard);
    const [board, getBoard, setBoardState, updateTodoInDB] = useBoardStore(
        (state) => [
            state.board,
            state.getBoard,
            state.setBoardState,
            state.updateTodoInDB,
        ]
    );

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source, type } = result;
        console.log({ destination, source, type });

        // Check if the user dragged(destination) outside of board
        if (!destination) return;

        // Handle Column drag
        if (type === 'column') {
            const entries = Array.from(board.columns.entries());
            const [removed] = entries.splice(source.index, 1);
            entries.splice(destination.index, 0, removed);
            const rearrangedColumns = new Map(entries);
            setBoardState({ ...board, columns: rearrangedColumns });
        }

        // This step is need as the indexes are stored as numbers 0,1,2 etc.Instead of id's with DND library
        //1. create copy of the column
        const columns = Array.from(board.columns);
        const startColumnIndex = columns[Number(source.droppableId)];
        const finishColumnIndex = columns[Number(destination.droppableId)];
        console.log({ startColumnIndex, finishColumnIndex });

        // Rebuild start and finish columns
        const startCol: Column = {
            id: startColumnIndex[0],
            todos: startColumnIndex[1].todos,
        };

        const finishCol: Column = {
            id: finishColumnIndex[0],
            todos: finishColumnIndex[1].todos,
        };
        console.log({ startCol, finishCol });

        if (!startCol || !finishCol) return;

        // Same column with same index
        if (source.index === destination.index && startCol === finishCol)
            return;

        const newTodos = startCol.todos;
        const [todoMoved] = newTodos.splice(source.index, 1);

        // Dragging and Dropping same column
        if (startCol.id === finishCol.id) {
            // Same column task drag
            newTodos.splice(destination.index, 0, todoMoved);
            const newCol = {
                id: startCol.id,
                todos: newTodos,
            };
            // Create copy of board
            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);
            setBoardState({ ...board, columns: newColumns });
        } else {
            // Dragging to another column

            // Make a copy of finishColumn
            const finishTodos = Array.from(finishCol.todos);
            finishTodos.splice(destination.index, 0, todoMoved);
            const newCol = {
                id: startCol.id,
                todos: newTodos,
            };
            // Create copy of board
            const newColumns = new Map(board.columns);

            newColumns.set(startCol.id, newCol);
            newColumns.set(finishCol.id, {
                id: finishCol.id,
                todos: finishTodos,
            });

            // Update in DB
            updateTodoInDB(todoMoved, finishCol.id);
            setBoardState({ ...board, columns: newColumns });
        }
    };

    // console.log({ board });

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable
                droppableId='board'
                direction='horizontal'
                type='column'
            >
                {(provided) => (
                    <div
                        className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {Array.from(board.columns.entries()).map(
                            ([id, column], index) => (
                                <Column
                                    key={id}
                                    id={id}
                                    todos={column.todos}
                                    index={index}
                                />
                            )
                        )}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Board;
