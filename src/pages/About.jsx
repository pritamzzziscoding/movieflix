import { NavLink } from "react-router-dom";

export const About = () => {
    return (
      <section className="box bg-gray-700 text-white py-16 px-6 flex justify-center items-center about">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-7 items-center content-center">
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">About MovieFlix</h2>
          <p className="text-lg md:text-3xl text-gray-300 mb-6 leading-relaxed">
            Welcome to <span className="text-green-400 font-semibold">MovieFlix</span>, your ultimate destination for discovering and streaming the latest and greatest movies. <br />
            Explore an extensive collection of films across various genres, from action-packed blockbusters to heartwarming dramas.
          </p>
          <p className="text-lg md:text-3xl text-gray-300 mb-6 leading-relaxed">
            With an intuitive interface and seamless experience, MovieFlix ensures that movie lovers can easily find and enjoy their favorite films anytime, anywhere.
          </p>
          <div className="mt-8">
            <NavLink to="/movie">
                <button className="explore text-2xl bg-green-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Explore Movies
                </button>
            </NavLink>
            

          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  