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
import { FaGithub, FaUser } from 'react-icons/fa';

import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";

export const Navbar = () => {
    const { editor } = useEditorStore();

    const insertTable = ({ rows, cols }: { rows: number, cols: number }) => {
        editor
          ?.chain()
          .focus()
          .insertTable({ rows, cols, withHeaderRow: false })
          .run()
    };

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    };

    const onSaveJSON = () => {
        if (!editor) return;

        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)],{
            type: "application/json",
        });
        onDownload(blob,`document.json`) // T0D0: Use document name
    };

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor.getHTML();
        const blob = new Blob([content],{
            type: "text/html",
        });
        onDownload(blob,`document.html`) // T0D0: Use document name
    };

    const onSaveText = () => {
        if (!editor) return;

        const content = editor.getText();
        const blob = new Blob([content],{
            type: "text/plain",
        });
        onDownload(blob,`document.txt`) // T0D0: Use document name
    };

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
                                        <MenubarItem onClick={onSaveJSON}>
                                            <FileJsonIcon className="size-4 mr-2"/>
                                            JSON
                                        </MenubarItem>
                                        <MenubarItem onClick={onSaveHTML}>
                                            <GlobeIcon className="size-4 mr-2"/>
                                            HTML
                                        </MenubarItem>
                                        <MenubarItem onClick={() => window.print()}>
                                            <BsFilePdf className="size-4 mr-2"/>
                                           PDF
                                        </MenubarItem>
                                        <MenubarItem onClick={onSaveText}>
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
                                        <MenubarItem onClick={() => insertTable({rows: 1, cols: 1})}>
                                            1 x 1
                                        </MenubarItem>
                                        <MenubarItem onClick={() => insertTable({rows: 2, cols: 2})}>
                                            2 x 2
                                        </MenubarItem>
                                        <MenubarItem onClick={() => insertTable({rows: 3, cols: 3})}>
                                            3 x 3
                                        </MenubarItem>
                                        <MenubarItem onClick={() => insertTable({rows: 4, cols: 4})}>
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
                                    <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                            <BoldIcon className="size-4 mr-2"/>
                                            <span>Bold</span>
                                        <MenubarShortcut>CTRL+B</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                            <ItalicIcon className="size-4 mr-2"/>
                                            <span>Italic</span>
                                        <MenubarShortcut>CTRL+I</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                                            <UnderlineIcon className="size-4 mr-2"/>
                                            <span>Underline</span>
                                        <MenubarShortcut>CTRL+U</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                                            <StrikethroughIcon className="size-4 mr-2"/>
                                            <span>Strikethrough</span>
                                        <MenubarShortcut>CTRL+S</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarSubContent>
                                </MenubarSub>
                                <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>>
                                    <RemoveFormattingIcon className="size-4 mr-2"/>
                                    Clear formatting
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                GitHub
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <FaGithub className="size-4 mr-2"/>
                                    <a href={`https://github.com/brajnyk/mindsdocs${Math.random().toString(36).substring(7)}`} target="_blank" rel="noopener noreferrer">
                                        Go to the GitHub project
                                    </a>
                                </MenubarItem>
                                <MenubarItem>
                                    <FaUser className="size-4 mr-2"/>
                                    <a href={`https://github.com/brajnyk${Math.random().toString(36).substring(7)}`} target="_blank" rel="noopener noreferrer">
                                        Author
                                    </a>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>
        </nav>
    );
};
