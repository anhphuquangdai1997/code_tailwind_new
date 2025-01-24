import React, { useState } from "react";
import {
    Navbar,
} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export function ComplexNavbar() {
    const [open, setOpen] = useState(false)
    const openDrawer = () =>{
        setOpen(true);
    }
    const closeDrawer = () => setOpen(false);

    return (
        <Navbar className="max-w-screen-xl p-2 h-[60px] z-1000000">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 h">
                <div className="flex  items-center gap-4">
                    <svg onClick={openDrawer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className="w-[100px] h-auto">
                        <a href="">
                            <img src="https://cdn.hdbank.com.vn/hdbank-file/picture/logo_1645778839158.png" alt="HDBank" />
                        </a>
                    </div>
                </div>
                <div className="flex  items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <Avatar src="https://res.cloudinary.com/daiphu1997/image/upload/v1661349488/dxrrlzfebhgbx1grtndj.jpg" alt="avatar" className="w-[35px] h-[35px]" />

                </div>
            </div>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Material Tailwind
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML components, all
                    written with Tailwind CSS classes and Material Design guidelines.
                </Typography>

            </Drawer>
        </Navbar>
    );
}
