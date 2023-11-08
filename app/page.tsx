import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Track Your Job Applications
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        rerum.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
