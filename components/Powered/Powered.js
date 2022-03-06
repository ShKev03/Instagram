import Link from "next/link";

export default function Powered() {
    return (
        <div className=" w-full bg-black flex items-center justify-end py-1 px-10  md:justify-between md:px-40 fixed bottom-0 left-0">
            <h1 className="text-white px-6 font-sans font-normal text-sm italic ">
                Powered by
            </h1>
            <Link href="https://github.com/shkev03">
                <div
                    href="https://github.com/shkev03"
                    className="bg-black flex items-center cursor-pointer"
                >
                    <img src="/Main-Logo.png" width={25} />
                    <h1 className="text-white px-1 font-sans font-semibold text-sm">
                        KevalShah
                    </h1>
                </div>
            </Link>
        </div>
    );
}
