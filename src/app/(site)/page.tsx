import Home from "@/components/Home";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template",
  description: "This is Home for NextCommerce Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
    <Suspense fallback={<p>Loading Home Page...</p>}>
      <Home />
    </Suspense>
    </>
  );
}
