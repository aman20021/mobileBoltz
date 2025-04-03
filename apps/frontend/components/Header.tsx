import { SidebarTrigger } from './ui/sidebar'
import { Button } from '@/components/ui/button'


export const Header = ({ children, className, onClick }: {
	children?: React.ReactNode,
	className?: string,
	onClick?: () => void
}) => {


    return (
        <div>
            <button
                className="border border-zinc-800 hover:bg-zinc-600/10 bg-zinc-900 cursor-pointer px-4 py-2 rounded-3xl">
                    <h1> Hello World </h1>
            </button>

        </div>
    )

};