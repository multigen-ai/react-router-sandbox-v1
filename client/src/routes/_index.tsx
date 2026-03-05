import { SVGProps } from "react";

export function SvgSpinnersBlocksShuffle2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1">
        <animate
          id="SVG7JagGz2Y"
          fill="freeze"
          attributeName="x"
          begin="0;SVGgDT19bUV.end"
          dur="0.2s"
          values="1;13"
        />
        <animate
          id="SVGpS1BddYk"
          fill="freeze"
          attributeName="y"
          begin="SVGc7yq8dne.end"
          dur="0.2s"
          values="1;13"
        />
        <animate
          id="SVGboa7EdFl"
          fill="freeze"
          attributeName="x"
          begin="SVG0ZX9C6Fa.end"
          dur="0.2s"
          values="13;1"
        />
        <animate
          id="SVG6rrusL2C"
          fill="freeze"
          attributeName="y"
          begin="SVGTOnnO5Dr.end"
          dur="0.2s"
          values="13;1"
        />
      </rect>
      <rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1">
        <animate
          id="SVGc7yq8dne"
          fill="freeze"
          attributeName="y"
          begin="SVG7JagGz2Y.end"
          dur="0.2s"
          values="13;1"
        />
        <animate
          id="SVG0ZX9C6Fa"
          fill="freeze"
          attributeName="x"
          begin="SVGpS1BddYk.end"
          dur="0.2s"
          values="1;13"
        />
        <animate
          id="SVGTOnnO5Dr"
          fill="freeze"
          attributeName="y"
          begin="SVGboa7EdFl.end"
          dur="0.2s"
          values="1;13"
        />
        <animate
          id="SVGgDT19bUV"
          fill="freeze"
          attributeName="x"
          begin="SVG6rrusL2C.end"
          dur="0.2s"
          values="13;1"
        />
      </rect>
    </svg>
  );
}

const Index = () => {
  return (
    <div className="bg-sidebar flex min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center p-12 lg:p-16">
          <div className="flex flex-col gap-6 max-w-xl">
            <SvgSpinnersBlocksShuffle2 className="h-12 w-12 stroke-sky-700 text-sky-500" />
            <h1 className="text-4xl font-bold tracking-tight">
              Work in Progress
            </h1>
            <div className="text-muted-foreground text-lg">
              Your agent is still working on this page.
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden lg:flex items-center justify-center p-12">
          <div className="relative w-full max-w-2xl">
            <img
              src="/hyper-anime-sky-auth-bg.webp"
              alt="Hyper AI"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
