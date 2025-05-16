"use client"; 
import { Card, CardBody, Divider, Button, Chip} from "@heroui/react";
import { BsCheckLg as Check } from "react-icons/bs";
import { MdOutlineRadioButtonUnchecked as Unchecked } from "react-icons/md";
export function FreePlan(){
    return ( <Card className="w-full">
            <CardBody className="flex flex-col gap-2">
              <p className="text-small text-neutral-400">FREE</p>
              <span className="text-4xl font-extrabold">$0</span>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Includes basic features</p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Dashboard and limited usage</p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Basic support</p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Unchecked className="text-neutral-400 text-xl" />
                <p className="font-light text-neutral-400">Advanced features</p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Unchecked className="text-neutral-400 text-xl" />
                <p className="font-light text-neutral-400">Earlier access</p>
              </div>

              <Divider />
              <Button variant="flat">Get Started</Button>
            </CardBody>
          </Card>) 
}

export function ProPlan(){
    return ( 
        <Card className=" w-full border-secondary border-2">
            <CardBody className="flex flex-col gap-2 ">
              <p className="text-small text-neutral-400">Pro</p>
              <Chip variant="flat" color="secondary">
                Best value
              </Chip>
              <span className="text-4xl font-extrabold">$20</span>
              <p className="font-semibold text-small text-neutral-400">
                Includes all basic features plus advanced options
              </p>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Includes advanced features</p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Dashboard and unlimited usage. </p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Priority support support</p>
              </div>
              <div className="flex flex-row items-center w-full justify-start gap-2">
                <Check className="text-success text-xl" />
                <p className="font-semibold">Earlier access</p>
              </div>

              <Divider />
              <Button color="secondary">Get Started.</Button>
            </CardBody>
          </Card>
    )
}

export function EnterprisePlan(){
    return ( 
        <Card className="w-full">
        <CardBody className="flex flex-col gap-2">
          <p className="text-small text-neutral-400">Enterprise</p>
          <span className="text-4xl font-extrabold">Custom</span>
          <p className="font-semibold text-small text-neutral-400">
            Includes all basic and pro options
          </p>
          <div className="flex flex-row items-center w-full justify-start gap-2">
            <Check className="text-success text-xl" />
            <p className="font-semibold">Work with teams</p>
          </div>
          <div className="flex flex-row items-center w-full justify-start gap-2">
            <Check className="text-success text-xl" />
            <p className="font-semibold">Live colaboration</p>
          </div>
          <div className="flex flex-row items-center w-full justify-start gap-2">
            <Check className="text-success text-xl" />
            <p className="font-semibold">Single SSO</p>
          </div>
          <div className="flex flex-row items-center w-full justify-start gap-2">
            <Check className="text-success text-xl" />
            <p className="font-semibold">
              Ultrafast support
              <span className="text-neutral-400 font-light">(24/7)</span>
            </p>
          </div>
          <Divider />
          <Button variant="flat">Contact us</Button>
        </CardBody>
      </Card>
    )
}