import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="h-full">
      <div className="w-full">
        <h1 className="text-2xl text-yellow-600">
          I am{" "}
          <span>
            <Typewriter
              words={["a Frontend", "a Backend", "an UI", "a Photographer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </main>
  );
}
