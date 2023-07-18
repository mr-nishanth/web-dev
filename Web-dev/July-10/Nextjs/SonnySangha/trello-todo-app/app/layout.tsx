import Modal from '@/components/Modal';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Todo application with AI',
    description: 'Generated by Nishanth aka Mr Black',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='bg-[#F5F6F8]'>
                {children}
                <Modal />
            </body>
        </html>
    );
}