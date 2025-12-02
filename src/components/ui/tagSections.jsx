import React from "react";

const TagSections = ({ img, title, className }) => {
  return (
    <button className={`group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden ${className}`}>
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="inset-12 absolute pointer-events-none select-none">
          <span
            className="block -translate-x-0 -translate-y-11/12 size-24 blur-xl"
            style={{
              background:
                "linear-gradient(45deg, rgb(122, 105, 249), rgb(68, 77, 201), rgb(90, 63, 245))",
            }}
          ></span>
        </span>
      </span>
      <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full">
        <span className="relative group-hover:scale-105">
          {img}
          <span
            className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
            style={{
              animation:
                "14s ease-in-out 0s infinite alternate none running star-shine",
              background:
                "linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(46, 55, 194), rgb(66, 63, 245))",
            }}
          ></span>
        </span>
        <span className="bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-sm text-transparent ">
          {title}
        </span>
      </span>
    </button>
  );
};

export default TagSections;
