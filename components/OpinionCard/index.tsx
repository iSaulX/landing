import { Card, CardBody, User} from "@heroui/react";

export type OpinionProps = {
    content: string; 
    author: string; 
    role: string;
}

export default function OpinionCard({content, author, role }: OpinionProps){
    return ( 
        <Card className="lg:w-[340px] w-[200px] border-1 dark:border-gray-800 border-gray-200 shadow-none">
            <CardBody>
                <p className="font-semibold">{content}</p>
                <div className="w-full flex items-start justify-start my-2 mt-auto">
                <User 
                name={author}
                description={role}
                className="mt-2"
                />
                </div>
            </CardBody>
        </Card>
    )
}