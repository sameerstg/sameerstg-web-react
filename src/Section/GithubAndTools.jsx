import Image from 'next/image';
import React from 'react'
import { BiLogoFlutter } from 'react-icons/bi';
import { FaUnity } from 'react-icons/fa';
import { SiBlender, SiC, SiCplusplus, SiCsharp, SiCss3, SiDotnet, SiFigma, SiFirebase, SiFlutter, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReact, SiTypescript, SiUnity } from 'react-icons/si';

function GithubAndTools() {
    var links = [

        { image: "https://download.blender.org/branding/community/blender_community_badge_white.svg", alt: "blender" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", alt: "c" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", alt: "cplusplus" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", alt: "csharp" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "css3" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg", alt: "dotnet" },
        { image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", alt: "figma" },
        { image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "firebase" },
        { image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", alt: "flutter" },
        { image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "html5" },
        { image: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg", alt: "illustrator" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", alt: "java" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "javascript" },
        { image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", alt: "nextjs" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "nodejs" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg", alt: "photoshop" },
        { image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt: "postman" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "python" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "react" },
        { image: "https://reactnative.devsvg", alt: "reactnative" },
        { image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "tailwind" },
        { image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "typescript" },
        { image: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg", alt: "unity" },




    ];
    return (
        <div className='flex flex-col gap-5 mx-2'>

            <button className='mx-auto w-full'><a href="https://github.com/sameerstg" target='_blank' rel='noreferrer noopener'>Github 🔗</a></button>




            <img  className=' border-[#fff] border rounded-xl mx-auto' src="https://github-readme-streak-stats.herokuapp.com/?user=sameerstg&theme=dark&hide_border=true" alt="sameerstg" />
            <div href="https://github.com/sameerstg">Tools I Use</div>

            <div className='border p-4 rounded-xl flex justify-center items-center gap-3 flex-wrap bg-[#151515] '>

                <SiUnity color='cyan' />
                <SiBlender color='cyan' />
                <SiCsharp color='cyan' />
                <SiDotnet color='cyan' />
                <SiHtml5 color='cyan' />
                <SiCss3 color='cyan' />
                <SiJavascript color='cyan' />
                <SiTypescript color='cyan' />
                <SiNextdotjs color='cyan' />
                <SiNodedotjs color='cyan' />
                <SiReact color='cyan' />
                <SiFigma color='cyan' />
                <SiC color='cyan' />
                <SiCplusplus color='cyan' />
                <SiFigma color='cyan' />
                <SiFlutter color='cyan' />
                <SiPostman color='cyan' />
                <SiFirebase color='cyan' />
                <SiMysql color='cyan' />
                <SiPython color='cyan' />

            </div>

        </div>



    )
}

export default GithubAndTools
