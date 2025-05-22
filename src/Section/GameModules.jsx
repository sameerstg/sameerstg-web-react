import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/Components/ui/carousel';
import React from 'react';

const blogs = [
    {
        imageUrl: "https://camo.githubusercontent.com/a68c3867add7989cee2611ec9e1907bce10ff4da1f7aaf249439fc532d1827be/68747470733a2f2f692e696d6775722e636f6d2f4b6f57616d686e2e706e67",
        title: "Cheatcode/Macro in unity",
        blog: "Welcome to the Unity Macro Package for Function Execution! This package provides developers with a streamlined way to create macros that execute functions with ease across Unity projects.How To Use Copy this link : https://github.com/sameerstg/macro-unity.git Window -> Package Manager -> ",
        link: "https://github.com/sameerstg/macro-unity",
    },
    {
        imageUrl: "https://firebase.google.com/images/social.png",
        title: "Firebase implementation template for unity",
        blog: "Sample scripts to implement firebase initializer, realtime database, firestore and authentication manager with it's samples.",
        link: "https://github.com/sameerstg/Firebase-Managers-Unity",
    },
];

function GameModules() {
    return (
        <div className="flex flex-col items-center py-8">
            <button>
                <a href={'https://github.com/sameerstg'} target="_blank" rel="noreferrer noopener">
                    Game Modules🔗
                </a>
            </button>

            <Carousel className="w-full max-w-4xl" opts={{
                loop: true,

            }} >
                <CarouselContent className="p-2 " >
                    {blogs.map((blog, index) => (
                        <CarouselItem key={index} className="p-4" >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
                                <img src={blog.imageUrl} alt={blog.title} className="w-full h-96 aspect-square object-cover mx-auto" />

                            </div>
                            <h3 className="text-xl font-semibold my-2">{blog.title}</h3>
                            <p className="text-gray-600  text-sm mb-4">{blog.blog}
                                <a href={blog?.link ?? "/"} target="_blank" rel="noreferrer noopener" className="text-blue font-semibold hover:underline">Read More</a>
                            </p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default GameModules;