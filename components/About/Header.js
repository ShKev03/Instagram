import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";


export default function Header() {
    return (
        <div className="w-full bg-black flex items-center">
            <div className="mx-2 cursor-pointer">
                <Link href="/">
                    <ArrowLeftIcon className="h-6 text-white" />
                </Link>
            </div>
            <img
                src="Main-Logo.png"
                width="40"
                height="40"
                className="mx-auto transform-left"
            />
        </div>
    );
}
