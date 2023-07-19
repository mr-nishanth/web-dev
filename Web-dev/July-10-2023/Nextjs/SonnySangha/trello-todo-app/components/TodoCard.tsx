'use client';

import { useBoardStore } from '@/store/BoardStore';
import { getImageURL } from '@/utils/getImageURL';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    DraggableProvidedDragHandleProps,
    DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    dragHandleProps,
    draggableProps,
}: Props) {
    const deleteTask = useBoardStore((state) => state.deleteTask);

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!todo.image) return;

        if (todo.image) {
            const fetchImage = async () => {
                const URL = await getImageURL(todo?.image!);
                if (URL) {
                    setImageUrl(URL.toString());
                }
            };
            fetchImage();
        }
    }, [todo]);

    return (
        <div
            className='bg-white rounded-md space-y-2 drop-shadow-md'
            {...dragHandleProps}
            {...draggableProps}
            ref={innerRef}
        >
            <div className='flex justify-between items-center p-5'>
                <p>{todo?.title}</p>
                <button
                    onClick={() => deleteTask(index, todo, id)}
                    className='text-red-500 hover:text-red-600'
                >
                    <XCircleIcon className='ml-5 h-8 w-8' />
                </button>
            </div>
            {/* Add imageUrl  */}
            {imageUrl && (
                <div className='w-full h-full rounded-b-md'>
                    <Image
                        src={imageUrl}
                        alt='Todo Picture'
                        width={400}
                        height={200}
                        className='w-full object-contain rounded-b-md'
                    />
                </div>
            )}
        </div>
    );
}

export default TodoCard;
