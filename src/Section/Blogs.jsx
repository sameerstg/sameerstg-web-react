import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/Components/ui/carousel';
import React from 'react';

const blogs = [
    {
        imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*nzpu-Xc22pQEkhTz",
        title: "The Healthiest People in the World Don’t Go to the Gym",
        blog: "If you want to be as healthy as possible, there are no treadmills or weight machines required. Don’t just take my word for it — look to the longest-lived people in the world for proof...",
        link: "",
    },
    {
        imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*nzpu-Xc22pQEkhTz",
        title: "Why Walking is Better Than Running for Longevity",
        blog: "Contrary to popular belief, you don’t need to run marathons to stay healthy. Walking, as a daily habit, provides enormous benefits for your heart, joints, and longevity...",
        link: "",
    },
];

function Blogs() {
    return (
        <div className="flex flex-col items-center py-8">
            <button className="mb-6 text-lg font-semibold text-blue-600 hover:underline">
                <a href={'/'} target="_blank" rel="noreferrer noopener">
                    View More Blogs 🔗
                </a>
            </button>

            <Carousel className="w-full max-w-4xl" opts={{
                loop: true,
            }} >
                <CarouselContent className="p-4" >
                    {blogs.map((blog, index) => (
                        <CarouselItem key={index} className="p-4" >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={blog.imageUrl} alt={blog.title} className="w-full h-64 aspect-square object-contain" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{blog.blog}</p>
                                    <a href={blog?.link ?? "/"} className="text-blue-600 font-semibold hover:underline">Read More</a>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Blogs;