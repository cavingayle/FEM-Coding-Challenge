import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="py-10 px-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden rounded-lg mx-auto md:w-2/4">
        <section className="bg-white p-8">
          <h1 className="text-xl text-blue-300 font-semibold capitalize">
            join our community
          </h1>
          <h2 className="text-yellow-600 font-semibold pt-4">
            30-day hassel-free monye back guarantee
          </h2>
          <p className="pt-2 text-gray-500">
            Gain access to our library tutorials along with eexpert code
            reviews. Perfect for any developers who are serious about honing
            theri skills
          </p>
        </section>
        <section className="text-white md:flex md:flex-row">
          <div className="bg-blue-300 p-8 md:w-1/2">
            <h2 className="text-lg font-semibold">Money Subscription</h2>
            <div className="flex items-center pt-2">
              <p className="text-2xl font-semibold">$29</p>
              <p className="ml-2 font-hairline ">per month</p>
            </div>
            <p className="font-light text-sm">
              Full access for less than $1 day
            </p>
            <button className="bg-yellow-600 hover:bg-blue-700 w-full text-white font-blod py-2 px-4 rounded mt-6 shadow-md">
              Button
            </button>
          </div>
          <div className="bg-blue-300 p-8 md:w-1/2">
            <h2 className="font-semibold text-lg">Why Us</h2>
            <div className="text-xs font-light pt-2">
              <p>Tutorials by industry experts</p>
              <p>Coding exercises Access</p>
              <p>Peer & expert code review</p>
              <p>Acces our Github Repo</p>
              <p>Community forum</p>
              <p>Flashcard decks</p>
              <p>New cides every week</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
