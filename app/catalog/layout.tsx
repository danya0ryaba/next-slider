import React, { Suspense } from 'react'
import Loading from './loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Slider",
    description: "test task slider on Next.js and TailwindCSS",
};

export default function LayoutCatalog({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}