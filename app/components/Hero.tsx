"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
        Hyeonjoon Nam
      </h1>
      
      <p className="text-xl md:text-2xl font-medium text-blue-400 mb-8">
        Junior System Software Engineer
      </p>

      <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
        <p>
          Specializing in <b>C++, CUDA, and High-Performance Systems</b>.
          <br className="hidden md:block" />
          I focus on low-level optimization, hardware-aware programming, and building robust developer infrastructure.
        </p>

        <div className="text-base md:text-lg text-white/80 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
          <p className="mb-4">
            Recently engineered a heterogeneous HPC simulation for <b>1.04M particles</b> achieving 
            <span className="text-blue-400 font-bold"> 85.23% compute throughput</span> on an RTX 3070.
          </p>
          <p>
            Key achievements include optimizing GPU rendering time by <span className="text-blue-400 font-bold">42%</span> (40ms → 23ms) 
            in Unreal Engine 5 and architecting <b>p4bot</b>, a containerized DevOps service that saves teams 
            <span className="text-blue-400 font-bold"> 15+ minutes daily</span> per member.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/Hyeonjoon_Nam_Resume.pdf"
            target="_blank"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </Link>
          <Link
            href="https://github.com/Hyeonjoon-Nam"
            target="_blank"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all flex items-center gap-2 border border-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}