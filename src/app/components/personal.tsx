"use client";
import React from "react";
import { Form, Button, Checkbox } from "@nextui-org/react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from "next/link";

export default function Personal() {
  const [action, setAction] = React.useState<null | string>(null);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="col-span-5 text-left">
      <p className="text-xl sm:text-2xl font-bold text-white">
        Customer Form
      </p>
      </div>
      
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' },
      '& .MuiInputBase-input': {color: 'white'},
      '& .MuiInputLabel-root': {color: 'white'},
      '& .MuiInputLabel-shrink': {color: 'white'}, 
      '& .MuiFormLabel-root': {color: 'white'},
      '& .MuiInput-underline:before': {borderBottomColor: 'white'},
      '& .MuiInput-underline:hover:before': {borderBottomColor: '#f59e0b'},
      '& .MuiInput-underline:after': {borderBottomColor: '#f59e0b'},
     }}
      noValidate
      autoComplete="off"
      
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-left"
      onReset={() => setAction("")}
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setAction(`submit ${JSON.stringify(data)}`);

      }}
    >
      <TextField
        id="firstName"
        label="First Name"
        variant="standard"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="standard"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />
      <TextField
        id="phoneNumber"
        label="Phone Number"
        variant="standard"
        className="mt-1 py-1 border-b-2 outline-none bg-transparent text-white text-left w-full"
      />

      <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-2">
      <TextField
        id="projectName"
        label="Project Name & (Detail Description)"
        variant="standard"
        className="mt-1 border-b-2 outline-none bg-transparent text-white w-full max-w-full"
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
    </Box>
  </div>
  );
}


