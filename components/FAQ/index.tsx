import { Accordion, AccordionItem } from "@heroui/react";

export default function FAQ(){
    return ( 
        <section className="flex w-full items-center justify-center"> 
        <div className="flex flex-col items-center justify-center w-full lg:w-4/6 gap-2">
        <p className="font-semibold text-primary font-mono">Frequently asked questions</p>
        <h2 className="font-extrabold text-4xl">FAQ</h2>
        <p className="font-semibold text-neutral-400">Here are some common questions and answers.</p>
        <Accordion variant="shadow">
            <AccordionItem title="What is your return policy?">
                <p className="font-semibold">You can return any item within 30 days of purchase.</p>
            </AccordionItem>
            <AccordionItem title="How do I track my order?">
                <p className="font-semibold">You will receive a tracking number via email once your order has shipped.</p>
            </AccordionItem>
            <AccordionItem title="How do I contact customer service?">
                <p className="font-semibold">You can contact us via email or phone.</p>
            </AccordionItem>
            <AccordionItem title="What payment methods do you accept?">
                <p className="font-semibold">We accept all major credit cards and PayPal.</p>
            </AccordionItem>
            <AccordionItem title="Do you offer international shipping?">
                <p className="font-semibold">Yes, we offer international shipping to most countries.</p>
            </AccordionItem>
        </Accordion>
        </div> 
        </section>
    )
}