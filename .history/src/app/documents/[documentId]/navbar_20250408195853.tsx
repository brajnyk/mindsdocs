"use client";

import Image from "next/image"
import Link from "next/link";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";

import { DocumentInput } from "./document-input";
import { FileIcon, 
    FileJsonIcon, 
    GlobeIcon, 
    FileTextIcon, 
    FilePlusIcon, 
    FilePenIcon, 
    TrashIcon, 
    PrinterIcon, 
    Undo2Icon, 
    TextIcon,
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    RemoveFormattingIcon, } from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";

export const Navbar = () => {
    const { editor } = useEditorStore();

    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
                   <Image src="/logo.svg" alt="Logo" width={36} height={36}/>
                </Link>
                <div className="flex flex-col">
                    <DocumentInput />
                    <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                        <MenubarMenu>
                            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                File
                            </MenubarTrigger>
                            <MenubarContent className="print:hidden">
                                <MenubarSub>
                                    <MenubarSubTrigger>
                                      <FileIcon className="size-4 mr-2"/>
                                      Save
                                    </MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>
                                            <FileJsonIcon className="size-4 mr-2"/>
                                            JSON
                                        </MenubarItem>
                                        <MenubarItem>
                                            <GlobeIcon className="size-4 mr-2"/>
                                            HTML
                                        </MenubarItem>
                                        <MenubarItem>
                                            <BsFilePdf className="size-4 mr-2"/>
                                           PDF
                                        </MenubarItem>
                                        <MenubarItem>
                                            <FileTextIcon className="size-4 mr-2"/>
                                            Text
                                        </MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                                <MenubarItem>
                                    <FilePlusIcon className="size-4 mr-2"/>
                                    New Document
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>
                                    <FilePenIcon className="size-4 mr-2"/>
                                    Rename
                                </MenubarItem>
                                <MenubarItem>
                                    <TrashIcon className="size-4 mr-2"/>
                                    Remove
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem onClick={() => window.print()}>
                                    <PrinterIcon className="size-4 mr-2"/>
                                    Print <MenubarShortcut>CTRL+P</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                Edit
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                    <Undo2Icon className="size-4 mr-2"/>
                                    Undo <MenubarShortcut>CTRL+Z</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                                    <Undo2Icon className="size-4 mr-2"/>
                                    Redo <MenubarShortcut>CTRL+Y</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                Insert
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarSub>
                                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>
                                            1 x 1
                                        </MenubarItem>
                                        <MenubarItem>
                                            2 x 2
                                        </MenubarItem>
                                        <MenubarItem>
                                            3 x 3
                                        </MenubarItem>
                                        <MenubarItem>
                                            4 x 4
                                        </MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                Format
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarSub>
                                    <MenubarSubTrigger>
                                        <TextIcon className="size-4 mr-2"/>
                                        Text
                                    </MenubarSubTrigger>
                                    <MenubarSubContent>
                                    <MenubarItem className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <BoldIcon className="size-4" />
                                            <span>Bold</span>
                                        </div>
                                        <MenubarShortcut>CTRL+B</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <ItalicIcon className="size-4" />
                                            <span>Italic</span>
                                        </div>
                                        <MenubarShortcut>CTRL+I</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <UnderlineIcon className="size-4" />
                                            <span>Underline</span>
                                        </div>
                                        <MenubarShortcut>CTRL+U</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <StrikethroughIcon className="size-4" />
                                            <span>Strikethrough</span>
                                        </div>
                                        <MenubarShortcut>CTRL+S</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarSubContent>
                                </MenubarSub>
                                <MenubarItem>
                                    <RemoveFormattingIcon className="size-4 mr-2"/>
                                    Clear formatting
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>
        </nav>
    );
};
