"use client";
import { AcmeLogo } from "../NavBar";
import {
  Divider,
  Button,
  Card,
  Input,
  CardBody,
  Form,
  Link,
} from "@heroui/react";
import { Message } from "react-iconly";
import {
  FaInstagram as Instagram,
  FaFacebook as Facebook,
  FaTwitter as Twitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="p-4 flex flex-col items-center w-full justify-center gap-3 border-t-1 dark:border-gray-700 border-gray-200">
      <div className="flex flex-col items-start justify-center gap-2 w-full lg:w-1/2">
        <div className="flex flex-row items-center justify-center gap-1">
          <AcmeLogo />
          <span className="font-extrabold">ACME</span>
        </div>
        <p className="text-small text-neutral-400">
          Making your life easier and better.
        </p>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            className="text-neutral-400 hover:text-secondary text-xl"
            href="#"
          >
            <Instagram />
          </Link>

          <Link
            className="text-neutral-400 hover:text-primary text-xl"
            href="#"
          >
            <Facebook />
          </Link>
          <Link
            className="text-neutral-400 hover:text-primary text-xl"
            href="#"
          >
            <Twitter />
          </Link>
        </div>
        <Divider />
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-col gap-2 items-start justify-center *:text-start *:text-neutral-400 *:text-small ">
            <Link href="#">Features</Link>
            <Link href="#">Customers</Link>
            <Link href="#">Pricing</Link>
          </div>
        <div className="flex flex-col gap-2 items-start justify-center *:text-start *:text-neutral-400 *:text-small ">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">Terms of Service</Link>
        </div>
        </div>
        <Card className="w-full">
          <CardBody className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2 ">
              <h4 className="font-semibold">Join to our email newsletter </h4>
              <p className="text-neutral-400 text-small">
                Get the latest news and updates.
              </p>
            </div>

            <Form
              validationBehavior="native"
              className="flex lg:flex-row items-center justify-center gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                startContent={<Message />}
                aria-label="Email"
                placeholder="john@example.com"
                type="email"
                isRequired
              />
              <Button color="primary" className="w-full lg:w-auto" type="submit">
                Subscribe
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </footer>
  );
}
