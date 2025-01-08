import Budget from "../ui/budget";
import Personal from "../ui/personal";
import Types from "../ui/types";

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

        {/*Components ui*/}
        <div className="space-y-8">
        <Types />
        <Budget />
        <Personal />
      </div>
      </div>
    </section>
  )
}