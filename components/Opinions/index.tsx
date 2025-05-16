"use client"; 
import Marquee from "../Marquee";
import OpinionCard from "../OpinionCard";
import { Heart2 } from "react-iconly";
export default function Opinions(){
    const opinions = [
        
        {
            content: "This is a great product!",
            author: "John Doe",
            role: "Customer"
        },
        {
            content: "Absolutely love it! It has changed my life.",
            author: "Jane Smith",
            role: "User"
        }, 
        {
            
            content: "Highly recommend this to everyone! Well done. It's like something  so new that everybody should try it.",
            author: "Alice Johnson",
            role: "Advocate"
        }, 
        {
            
            content: "A must-have for anyone looking to improve their workflow.",
            author: "Bob Brown",
            role: "Professional"
        }, 
        {
            
            content: "This product exceeded my expectations!",
            author: "Charlie Green",
            role: "Reviewer"
        }
    ]
    return ( 
        <section className="w-full p-2 flex flex-col items-center gap-3 justify-center relative">
            <Marquee direction="right" duration={100}>
                {opinions.map((opinion, index) => (
                    <OpinionCard 
                        key={index}
                        content={opinion.content}
                        author={opinion.author}
                        role={opinion.role}
                    />
                ))}
            </Marquee>
            <Marquee direction="left" duration={100} className="opacity-80">
                {opinions.map((opinion, index) => (
                    <OpinionCard 
                        key={index}
                        content={opinion.content}
                        author={opinion.author}
                        role={opinion.role}
                        
                    />
                ))}
            </Marquee>
            <Marquee direction="right" duration={80} className="opacity-40">
                {opinions.map((opinion, index) => (
                    <OpinionCard 
                        key={index}
                        content={opinion.content}
                        author={opinion.author}
                        role={opinion.role}
                    />
                ))}
            </Marquee>
            <div className="flex flex-col items-center w-full absolute bottom-0 left-0 py-24 justify-center bg-gradient-to-t from-black from-20% inset-x-2 to-transparent">
                <Heart2 primaryColor="red"  size={60}/>
                <h3 className="font-extrabold text-4xl text-center">Words thas speaks for itself.</h3>
                <p className="text-neutral-400 font-semibold">See why our customers love us. </p>
            </div>
        </section>
    )
}