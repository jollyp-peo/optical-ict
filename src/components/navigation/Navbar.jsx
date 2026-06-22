import Container from "@/components/layout/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "@/components/ui/Button";

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

          <div
            className="
              hidden
              items-center
              gap-3
              lg:flex
            "
          >
            <Button
              variant="ghost"
            >
              Login
            </Button>

            <Button>
              Book Repair
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}