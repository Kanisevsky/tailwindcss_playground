import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function FeatureCard() {
  return (
    <Link
      href="/"
      className="mt-16 group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1
        ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
    >
      <div className="flex items-center space-x-3">
        <Image
          src="/chat.svg"
          height={24}
          width={24}
          className="stroke-sky-500 group-hover:stroke-white"
        />
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
          New Project
        </h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-sm">
        Create a new project from a variety of starting template
      </p>
    </Link>
  );
}

export default FeatureCard;
