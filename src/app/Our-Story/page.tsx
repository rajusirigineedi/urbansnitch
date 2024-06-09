import React from "react"
import Image from "next/image"

const OurStory = () => {
    return (
        <div>
            <div className="relative">
                <Image 
                    className="w-full object-cover rounded-md"
                    src={"/OurStory.png"}
                    alt="Random image"
                    layout="responsive"
                    width={101}
                    height={101}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">Our Story</h2><br/>
                </div>
                <div className="absolute inset-5 flex items-center justify-center">
                    <h5 className="text-white text-xl mt-40 max-w-xl text-center">Considered Jeans that feels as good in size and fit as it looks. Innovative fabrics and functional silhouettes designed to make you rest-ready anytime and immense into clothing</h5>
                </div>
            </div>
            <div className="grid grid-cols-2 items-center mt-40">
                <div className="text-center max-w-xl justify-self-end mr-10">
                    <div className="font-extrabold">Who We Are</div>
                    <br/>
                    <div>
                    HermanHood is on a mission to put our most crucial time on a pedestal.
                    We believe time spent recharging is a gift to every part of life: 
                    we&apos;re better selves, partners, friends, parents, employees, pickleball
                    players, you name it, when we&apos;re well rested.This mantra threads through
                    every part of our design process, resulting in thoughtful products that
                    are made for reveling in the restful moments of everyday. Sleeping, 
                    dreaming, contemplating — moments that make you say, let&apos;s go back to bed.
                    The only thing we can&apos;t do is cook you breakfast in the morning.
                    </div>
                </div>
                <div><img src="/OurStoryMission.jpeg" className="w-[30rem] h-[40rem] ml-10"/></div>
            </div>
            <div className="grid grid-cols-2 items-center mt-40">
                <div className="justify-self-end mr-10"><img src="/OurStoryMission2.jpeg" className="w-[30rem] h-[40rem]"/></div>
                <div className="text-center max-w-xl ml-10">
                    <div className="font-extrabold">Who We Want To Be</div>
                    <br/>
                    <div>
                    Our mission is simple — a better rested world.
                    <br/><br/>
                    We are constantly seeking out new possibilities for restoration with products
                    that allow you to hit pause, or maybe just smack that snooze button one more time.
                    We see our bedrooms as so much more than just another room in the house;  instead
                    a place to prioritize yourself, honoring what you need through connection, stillness,
                    a good book (or binging one more episode), and a great night&apos;s sleep. We celebrate 
                    rest as a universal treasure, and one that you owe to yourself. 
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="mt-40"><img src="/OurStoryMiddle.jpg"/></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h5 className="text-white text-xl max-w-xl text-center">
                        Exceptionally crafted products to help you achieve your best rest. Sweating the details keeps us up at night (ironic, we know).
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default OurStory;