"use client"; 
import { AcmeLogo } from "../NavBar";

export default function Footer(){
    return ( 
        <footer className="p-2 flex flex-col items-center w-full justify-center gap-3 border-t-1 dark:border-gray-700 border-gray-200">
            <div className="flex flex-row items-center justify-center gap-1">
                <AcmeLogo />
                <span className="font-extrabold">ACME</span>
            </div>
        </footer>
    )
}