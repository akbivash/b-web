import CountUp from "../../../components/ui/CountUp";

const About = () => {
  return (
    <div className="grid  gap-20 sm:flex items-center">
      <div className="grid gap-10 flex-1">
       
        <div className="grid gap-xs">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p>
            Our mission is to empower businesses of all sizes with innovative IT
            solutions, creative business ideas, and strategic marketing
            solutions.
          </p>
        </div>
        <div className="grid gap-xs">
          <h2 className="text-3xl font-bold">Our Goals</h2>
          <p>
            We aim to consistently deliver excellence in everything we do,
            placing our clients at the center of every decision and solution.
            Your satisfaction and success are our primary goals.
          </p>
        </div>
      </div>
      <div className="grid gap-14 lg:flex-[0.5]">
        <div className="grid gap-xs  border-l-md border-orange-default pl-md">
          <h1 className="text-3xl flex gap-1 font-bold">
            $
            <CountUp value={20} speed={30} /> +
           Projects
          </h1>
          <p className="text-gray-dark">2023 projects</p>
        </div>
        <div className="grid gap-xs border-l-md border-orange-default pl-md">
          <h1 className="text-3xl font-bold flex">
            <CountUp value={10} speed={10} /> +
          </h1>
          <p className="text-gray-dark">Craft and staff employees</p>
        </div>
        <div className="grid gap-xs border-l-md border-orange-default pl-md">
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
