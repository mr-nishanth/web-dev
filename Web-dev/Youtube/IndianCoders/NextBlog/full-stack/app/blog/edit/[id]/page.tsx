'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';

type UpdateBlogParams = {
    title: string;
    description: string;
    id: string;
};

const editBlog = async (data: UpdateBlogParams) => {
    const res = fetch(`http://localhost:3000/api/blog/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            description: data.description,
            title: data.title,
        }),
        // @ts-ignore
        'Content-Type': 'application/json',
    });
    return (await res).json();
};

const deleteBlog = async (id: string) => {
    const res = fetch(`http://localhost:3000/api/blog/${id}`, {
        method: 'DELETE',
        // @ts-ignore
        'Content-Type': 'application/json',
    });
    return (await res).json();
};

const getBlogById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`);
    const { post } = await res.json();
    return post;
};

const EditBlog = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    console.log(params.id);

    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        toast.loading('Fetching Blog details 🔍', { id: '1' });
        if (params.id) {
            getBlogById(params?.id)
                .then((result) => {
                    if (titleRef.current && descriptionRef.current) {
                        titleRef.current.value = result.title;
                        descriptionRef.current.value = result.description;
                    }

                    toast.success('Fetching completed 🥳', { id: '1' });
                })
                .catch((err) => {
                    toast.error('Error in while fetching Blog details 🥲', {
                        id: '1',
                    });
                    console.log(err);
                });
        }
    }, []);

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        console.log(titleRef.current?.value);
        console.log(descriptionRef.current?.value);

        if (titleRef.current && descriptionRef.current) {
            try {
                toast.loading('Updating Blog 🚀', { id: '1' });
                await editBlog({
                    title: titleRef.current?.value,
                    description: descriptionRef.current?.value,
                    id: params.id,
                });
                toast.success('Blog updated successfully 🥳', { id: '1' });
                router.push('/');
            } catch (error) {
                toast.error('Error in while updating Blog details 🥲', {
                    id: '1',
                });
                console.log(error);
            }
        }
    };

    const handleDelete = async () => {
        try {
            toast.loading('Deleting Blog 🚀', { id: '2' });
            await deleteBlog(params.id);
            toast.success('Blog deleted successfully 🥳', { id: '2' });
            router.push('/');
        } catch (error) {
            toast.error('Error in while deleting Blog details 🥲', {
                id: '2',
            });
            console.log(error);
        }
    };
    return (
        <>
            <Toaster />
            <div className='w-full m-auto flex my-4'>
                <div className='flex flex-col justify-center items-center m-auto'>
                    <p className='text-2xl text-slate-200 font-bold p-3'>
                        Edit A Wonderful Blog 🚀{' '}
                    </p>
                    <form>
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
                        <div className='flex justify-normal items-center'>
                            <button
                                className='font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100'
                                onClick={handleUpdate}
                            >
                                Update
                            </button>
                            <button
                                className='font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg m-auto hover:bg-red-500'
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditBlog;
