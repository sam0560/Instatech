import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="px-0 lg:px-8 my-16">
      <Box
          w="100%"
          p={8}
          borderRadius={{ base: "0", lg: "16px" }}
          className="bg-card-bg radial-bg"
        >
          <div className="text-center max-w-[35rem] mx-auto text-dark-text py-24">
            <h2 className="text-[rgb(181 22 91/1)]">Experience the magic of instaTech</h2>
            <h3 className="text-secondary pt-2 pb-4">Get in touch with to Learn more</h3>
            <div className="bg-primary hover:bg-secondary w-40 mx-auto p-2 rounded-md text-[white] cursor-pointer">
                <Link href="" className="text-lg">Contact</Link>
            </div>
          </div>
        </Box>
    </div>
  )
}
