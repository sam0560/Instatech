import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap items-start justify-start gap-16 lg:gap-x-60 container py-10 px-4 lg:px-0">
          <ul className="flex flex-col gap-3">
            <li></li>
            <li>
              <Link
                href="/home"
                className="text-base leading-6 text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="text-base leading-6 text-gray-900"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-base leading-6 text-gray-900"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/video"
                className="text-base leading-6 text-gray-900"
              >
                Video
              </Link>
            </li>
          </ul>

          {/* Privacy */}
          <ul className="flex flex-col gap-3">
            <li className="font-semibold">Legal</li>
            <li>
              <Link
                href="/"
                className="text-base leading-6 text-gray-900"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-base leading-6 text-gray-900"
              >
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-base leading-6 text-gray-900"
              >
                Security
              </Link>
            </li>
          </ul>

          {/* Social connects */}
          <div>
            <h6 className="font-semibold text-[#ffffff] mb-4">Follow me</h6>
            <ul className="flex items-center gap-4">
              <li>
                <Link href="">
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Github />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
