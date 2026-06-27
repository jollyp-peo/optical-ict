"use client";

import Container from "@/components/layout/Container";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import Button from "@/components/ui/Button";

import BookButton from "@/features/booking/components/BookButton";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b
        border-slate-200/80

        bg-white/80

        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Logo />

          <NavLinks />

          <MobileMenu />

          <div
            className="
              hidden
              items-center
              gap-3

              lg:flex
            "
          >
            <Button variant="ghost">
              Login
            </Button>

            <BookButton type="repair">
              Book Repair
            </BookButton>
          </div>
        </div>
      </Container>
    </header>
  );
}