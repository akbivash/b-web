import CountUp from "../../../components/ui/CountUp";

const About = () => {
 
  return (
    <div className="grid  gap-20 sm:flex items-center">
      <div className="grid gap-10 flex-1">
        <div className="grid gap-8">
          <span className="text-xs font-semibold text-black-light">ABOUT US</span>
          <div className="grid gap-4">
            <h2 className="text-4xl font-bold">
              We collaborate with governments, change makers.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              velit quaerat quo laborum necessitatibus quibusdam mollitia, at
              deserunt harum impedit, voluptatem nostrum rem, esse ipsa neque
              nesciunt sunt. Ex, praesentium enim? Voluptatem, dolore.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            iure voluptatibus quod blanditiis iste libero quae odit ad culpa
            fuga! Iure, eius.
          </p>
        </div>
        <div className="grid gap-4">
          <h2 className="text-4xl font-bold">Our Goals</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            iure voluptatibus quod blanditiis iste libero quae odit ad culpa
            fuga! Iure, eius.
          </p>
        </div>
      </div>
      <div className="grid gap-14 lg:flex-[0.5]">
        <div className="grid gap-4  border-l-md border-orange-default pl-md">
          <h1 className="text-sm flex gap-1 font-bold">
            $
            <CountUp value={12} speed={30}/>
            billion
          </h1>
          <p className="text-gray-dark">2023 revenues</p>
        </div>
        <div className="grid gap-4 border-l-md border-orange-default pl-md">
          <h1 className="text-sm font-bold flex">
          <CountUp value={99} speed={10}/> +
          </h1>
          <p className="text-gray-dark">Craft and staff employees</p>
        </div>
        <div className="grid gap-4 border-l-md border-orange-default pl-md">
          <h1 className="text-sm font-bold flex">
          <CountUp value={50} speed={10}/>   
            +
          </h1>
          <p className="text-gray-dark">Award winner</p>
        </div>
      </div>
    </div>
  );
};

export default About;
