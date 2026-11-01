import { createFileRoute } from "@tanstack/react-router";
import { LasertronicsCaseStudy } from "@/components/case-study/LasertronicsCaseStudy";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      {
        title: "Lasertronics E-Shop & Hardware Ecosystem — Case Study by ValGrow Labs",
      },
      {
        name: "description",
        content:
          "How ValGrow Labs built a high-throughput, sub-second digital retail architecture for Lasertronics PVT LTD — 16,700+ live InTouch POS SKUs, zero-delay sync, and automated margin protection.",
      },
      {
        property: "og:title",
        content: "Lasertronics E-Shop & Hardware Ecosystem — Technical Case Study | ValGrow Labs",
      },
      {
        property: "og:description",
        content:
          "Enterprise case study of Sri Lanka's largest electronics e-commerce platform with real-time InTouch ERP synchronization.",
      },
      {
        name: "theme-color",
        content: "#0A192F",
      },
    ],
  }),
  component: LasertronicsCaseStudy,
});

