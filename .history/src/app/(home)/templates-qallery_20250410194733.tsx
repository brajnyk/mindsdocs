"use client";

import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
 } from "@/components/ui/carousel";

 import { cn } from "@/lib/utils";

const templates = [{ id: "blank", label: "Blank Document", imageUrl: "/logo.svg"}];

export const TemplatesGallery = () => {
    const isCreate = false;

    return(
        <div className="bg-[#F1F3F4]">
            <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
                <h3 className="font-medium">Start a new document</h3>
                <Carousel>
                    <CarouselContent className="-ml-4">
                        {templates.map((template) => (
                            <CarouselItem
                                key={template.id}
                                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
                            >
                                <div
                                    className={cn(
                                        "aspect-[3/4] flex flex-col gap-y-2.5",

                                    )}
                                >

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};