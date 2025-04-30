import type { Metadata } from 'next';
import Navbar from './components/navbar';
import './globals.css';

export const metadata: Metadata = {
    title: 'Austen Design House',
    description: 'Austen Design House',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        {children}
        </body>
        </html>
    );
}
