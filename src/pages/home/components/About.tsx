import CountUp from "../../../components/ui/CountUp";

const About = () => {
  return (
    <div className="grid  gap-20 sm:flex items-center">
      <div className="grid gap-10 flex-1">
        <div className="grid gap-8">
          <span className="text-2xl font-semibold text-black-light">
            ABOUT US
          </span>
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">
              We provide high performance IT solutions for your business.
            </h2>
            <p>
            Whether
            you're looking to streamline your operations, explore new business
            avenues, or boost your online presence, we have the solutions you
            need.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p>
            Our mission is to empower businesses of all sizes with innovative IT
            solutions, creative business ideas, and strategic marketing
            solutions.
          </p>
        </div>
        <div className="grid gap-4">
          <h2 className="text-3xl font-bold">Our Goals</h2>
          <p>
            We aim to consistently deliver excellence in everything we do,
            placing our clients at the center of every decision and solution.
            Your satisfaction and success are our primary goals.
          </p>
        </div>
      </div>
      <div className="grid gap-14 lg:flex-[0.5]">
        <div className="grid gap-4  border-l-md border-orange-default pl-md">
          <h1 className="text-3xl flex gap-1 font-bold">
            $
            <CountUp value={7} speed={30} />
            million
          </h1>
          <p className="text-gray-dark">2023 revenues</p>
        </div>
        <div className="grid gap-4 border-l-md border-orange-default pl-md">
          <h1 className="text-3xl font-bold flex">
            <CountUp value={99} speed={10} /> +
          </h1>
          <p className="text-gray-dark">Craft and staff employees</p>
        </div>
        <div className="grid gap-4 border-l-md border-orange-default pl-md">
          <h1 className="text-3xl font-bold flex">
            <CountUp value={50} speed={10} />+
          </h1>
          <p className="text-gray-dark">Award winner</p>
        </div>
      </div>
    </div>
  );
};

export default About;
