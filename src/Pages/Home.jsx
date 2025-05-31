"use client";
import React from "react";
import Intro from "../Section/Intro";
import Portfolio from "../Section/Portfolio";
import Socials from "../Section/Socials";
import Technologies from "../Section/Technologies";
import Interests from "../Section/Interests";
import GithubAndTools from "../Section/GithubAndTools";
import OtherLinks from "../Section/OtherLinks";
import { Vortex } from "../Components/ui/vortex";
import Feedback from "@/Section/Feedback";
import Experience from "@/Section/Experience";
function HomeMain() {
  return (
    <div
      id="home"
      className="text-primary text-2xl laptop:text-4xl font-bold text-center flex flex-col gap-8 laptop:gap-20 scroll-smooth "
    >
      <Vortex
        backgroundColor="#0000"
        className=""
        rangeY={400}
        particleCount={50}
        baseHue={120}
      >
        <Intro />
      </Vortex>
      <div className="flex flex-col justify-center items-center gap-8 laptop:gap-5 laptop:my-20">
        <Socials />
        <Technologies />
        <Interests />
        <GithubAndTools />
        <div className="my-10 flex flex-col gap-10">
          <div>Experience Timeline</div>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <Experience
              title="Web Development"
              startDate="2019-03-15T03:13:12Z"
            />
            <Experience
              title="Game Development"
              startDate="2021-04-21T20:45:13Z"
            />
            <Experience
              title="Mobile Development"
              startDate="2021-03-02T12:05:06Z"
            />
            <Experience
              title="Photo Editting"
              startDate="2015-03-01T20:45:13Z"
            />
            <Experience
              title="Video Editting"
              startDate="2019-03-05T21:30:08Z"
            />
          </div>
        </div>
      </div>

      {/* BUG: bahir nikal rha h */}
      <div id="portfolio">
        <Portfolio />
      </div>

      <OtherLinks />
      <Feedback />
    </div>
  );
}

export default HomeMain;
