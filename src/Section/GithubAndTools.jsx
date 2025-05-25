import React from 'react'
import { SiBlender, SiC, SiCplusplus, SiCsharp, SiCss3, SiDotnet, SiFigma, SiFirebase, SiFlutter, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReact, SiTypescript, SiUnity } from 'react-icons/si';

function GithubAndTools() {
    
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
