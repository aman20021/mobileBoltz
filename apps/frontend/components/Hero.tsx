'use client';

import { Prompt } from './Prompt';

export const  Hero = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-center">
                Welcome to my-turborepo
            </div>

            <div className="text-xl text-center">
                A monorepo with Next.js, TypeScript, and Yarn Workspaces
            </div>
            <Prompt />
        </div>
    );
}