const AboutMe = () => {
  return (
    <section className="bg-custom_dark1 text-white">
      {/* W-[60%] */}
      <div className="container py-12 lg:py-36  space-y-5 text-center">
        <h1 className="sectionH1">About Me</h1>
        <p className="sectionP">
          Full-Stack Developer
        </p>
        {/* Text Box */}
        <div className="flex flex-col md:flex-row justify-between text-start space-x-0 md:space-x-4 font-thin leading-8">
          {/* Left Paragraph */}
          <div className=" space-y-5">
            <p>
              I&apos;m a versatile web developer, fluent in both front-end and
              back-end technologies. On the front end, I craft engaging user
              interfaces with HTML, CSS, and JavaScript, often enhancing them
              with the power of React and the elegance of Tailwind CSS. I&apos;m
              passionate about creating seamless user experiences that captivate
              and delight
            </p>
            <p>
              On the back end, I&apos;m a Node.js enthusiast, adept at using
              Express.js for building robust APIs and Nest.js for scalable
              applications. My database skills extend to both SQL and NoSQL
              databases, and I&apos;m skilled in working with ORMs to optimize
              data handling.
            </p>
          </div>
          {/* Right Paragraph */}
          <div>
            <p>
              With a passion for clean code and a knack for problem-solving, I
              thrive on turning complex challenges into elegant solutions.
              Whether it&apos;s crafting pixel-perfect front-end designs or
              architecting efficient back-end systems, I&apos;m dedicated to
              delivering high-quality, performance-driven web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
