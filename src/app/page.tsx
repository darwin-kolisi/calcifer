export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <section>
        <p>about</p>
        <p>Hey, I am calcifer, an ML engineer from South Africa.</p>
        <p>
          Right now I am working in Johannesburg building a web app called
          bucket. I spend my free time diving into ML and math stuff because AI
          is pretty fascinating. Still figuring it all out, but that is half the
          fun.
        </p>
      </section>
      <section>
        <p>projects</p>
        <div>
          <h2>bucket</h2>
          <p>A web app I am building at work</p>
        </div>
        <div>
          <h2>simple games</h2>
          <p>Just some games I made to learn and have fun</p>
        </div>
        <div>
          <h2>neural network experiments</h2>
          <p>Playing around with ML models and seeing what happens</p>
        </div>
      </section>
      <section>
        <p>contact</p>
        <a>myemail.me</a>
      </section>
    </div>
  );
}
