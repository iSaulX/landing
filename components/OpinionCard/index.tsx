import { Card, CardBody, User} from "@heroui/react";

export type OpinionProps = {
    content: string; 
    author: string; 
    role: string;
}

export default function OpinionCard({content, author, role }: OpinionProps){
    return ( 
        <Card className="lg:w-[340px] w-[200px]">
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