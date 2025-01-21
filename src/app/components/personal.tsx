"use client";
import React from "react";
import { Form, Button, Input, Checkbox } from "@nextui-org/react";
import Link from "next/link";

export default function Personal() {
  const [action, setAction] = React.useState<null | string>(null);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="col-span-5 text-left mb-2 mt-3">
      <p className="text-2xl sm:text-3xl font-bold text-white">
        Customer Form
      </p>
      </div>
      
    <Form
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left mt-4"
      validationBehavior="native"
      onReset={() => setAction("")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        // setAction(`submit ${JSON.stringify(data)}`);

      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid first name"
        // label="First Name" labelPlacement="outside"
        name="firstname" placeholder="First Name" type="text"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid last name"
        name="lastname" placeholder="Last Name" type="text"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid phone number"
        name="phonenumber" placeholder="Phone Number" type="tel"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        name="email" placeholder="Email" type="email"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />

      <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-2">
      <Input
        isRequired
        errorMessage="Please enter your project Name and detail description"
        name="projectname" placeholder="Project Name and (Detail Description)" type="text"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white w-full max-w-full"
      />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-2 flex items-center space-x-2">
      <Checkbox defaultSelected radius="none" className="mr-4 mb-4"/>
        By ticking this box, I agree to the <Link href="/privacy-policy" className="text-yellow-500 underline">Privacy Policy</Link>
      </div>

      <div className="flex justify-start gap-2 mt-2">
        <Button color="primary" type="submit" className="px-4 py-2 bg-yellow-500 border-2 text-white font-semibold rounded hover:bg-transparent transition duration-300">
          Submit
        </Button>
        <Button type="reset" variant="flat" className="px-4 py-2 bg-transparent border-2 text-white font-semibold rounded hover:bg-transparent transition duration-300">
          Reset
        </Button>
      </div>

      {action && (
        <div className="text-small text-default-500 text-yellow-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  </div>
  );
}


