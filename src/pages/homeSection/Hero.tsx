import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../assets/macbook-exposed.png";

const Hero = () => {
  return (
    <Container className="h-[calc(100vh-4px)] grid grid-col-1 md:grid-cols-2 place-content-center mt-5">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold text-nowrap">
          <span className="text-gray">Don't Worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="text-dark-gray max-w-[44ch] mt-10 mb-5 text-lg">
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-step place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">
            Macebook repairs
          </span>{" "}
          and diagnostics
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[35deg] object-contain h-[93%]"
          src={macbook}
          alt="mackbook bannar"
        />
      </div>
    </Container>
  );
};

export default Hero;
