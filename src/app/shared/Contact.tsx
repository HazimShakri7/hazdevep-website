import Budget from "../components/budget";
import Personal from "../components/personal";
import Types from "../components/types";

export default function Contact() {

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-black to-green-900 text-white min-h-screen flex items-center justify-center"
    >
      {/*Title*/}
      <div className="container text-center mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Want a Website?
        </h2>
        <div className="border-2 border-white p-4 sm:p-6 md:p-8 m-4 sm:m-6 md:m-10 rounded-md">

        {/*Components*/}
        <div className="space-y-8">
        <Types />
        <Budget />
        <Personal />
      </div>
      </div>
      </div>
    </section>
  )
}