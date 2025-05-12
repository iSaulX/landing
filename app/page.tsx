"use client"; 
import { Button } from "@heroui/react";
export default function App(){
  return ( 
    <main className="flex flex-col items-center justify-center gap-2 dark min-h-screen p-5 w-full bg-background text-foreground">
      <h1 className="font-extrabold text-2xl">Welcome to Next.js</h1>
      <Button variant="flat" color="primary">Click me. </Button>
    </main>
  )
}