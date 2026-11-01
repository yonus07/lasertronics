import { createFileRoute } from "@tanstack/react-router";
import { LasertronicsCaseStudy } from "@/components/case-study/LasertronicsCaseStudy";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      {
        title: "Lasertronics E-Shop & Hardware Ecosystem — Case Study by ValGrow Labs",
      },
      {
        name: "description",
        content:
          "Enterprise project showcase: How ValGrow Labs built a high-throughput, sub-second digital retail architecture for Lasertronics PVT LTD.",
      },
      {
        property: "og:title",
        content: "Lasertronics E-Shop & Hardware Ecosystem — Case Study | ValGrow Labs",
      },
      {
        name: "theme-color",
        content: "#0A192F",
      },
    ],
  }),
  component: LasertronicsCaseStudy,
});

