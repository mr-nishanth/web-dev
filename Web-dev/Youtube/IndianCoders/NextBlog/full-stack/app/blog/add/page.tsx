'use client';
import { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const postBlog = async ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    const res = fetch(`http://localhost:3000/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ description, title }),
        // @ts-ignore
        'Content-Type': 'application/json',
    });
    return (await res).json();
};

const AddBlog = () => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(titleRef.current?.value);
        console.log(descriptionRef.current?.value);

        if (titleRef.current && descriptionRef.current) {
            try {
                toast.loading('Adding Blog 🚀', { id: '1' });
                await postBlog({
                    title: titleRef.current?.value,
                    description: descriptionRef.current?.value,
                });
                toast.success('Blog posted successfully 🥳', { id: '1' });
                router.push('/');
            } catch (error) {
                toast.error('Error in while posting Blog 🥲', {
                    id: '1',
                });
                console.log(error);
            }
        }
    };
    return (
        <>
            <Toaster />
            <div className='w-full m-auto flex my-4'>
                <div className='flex flex-col justify-center items-center m-auto'>
                    <p className='text-2xl text-slate-200 font-bold p-3'>
                        Add A Wonderful Blog 🚀{' '}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            ref={titleRef}
                            placeholder='Enter Title'
                            type='text'
                            className='rounded-md px-4 py-2 my-2 w-full'
                        />
                        <textarea
                            placeholder='Enter Description'
                            className='rounded-md px-4 py-2 my-2 w-full'
                            ref={descriptionRef}
                        ></textarea>
                        <button className='font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddBlog;
