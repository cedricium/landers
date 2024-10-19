export default function Contact() {
  return (
    <main className="row-start-2 col-start-2 col-end-8 w-full h-full flex flex-col gap-12 row-start-2 justify-start items-start">
      <h1 className="max-w-md text-6xl text-background font-[family-name:var(--font-serif)]">
        Start the Conversation
      </h1>

      <div className="max-w-[600px] text-white/70 tracking-normal">
        <p>
          Interested in a demo? Want to learn more? Fill out the following form
          and we&apos;ll get back to you as soon as possible.
        </p>
        <br />
        <p>Simply enter your email address to subscribe to updates.</p>
      </div>

      <form className="flex flex-col gap-20 max-w-[600px] w-full text-background">
        <div className="flex gap-12">
          <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
            01
          </span>
          <label
            htmlFor=""
            className="inline-flex flex-1 flex-col gap-2.5 after:content-[''] after:inset-x-0 after:bottom-0 after:w-full after:h-px after:bg-white/70"
          >
            Email Address*
            <input
              className="text-white/70 outline-none bg-transparent w-full"
              required
              type="email"
              name="email"
              id="email"
              placeholder="alice@example.com"
            />
          </label>
        </div>

        <div className="flex gap-12">
          <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
            02
          </span>
          <label
            htmlFor=""
            className="inline-flex flex-1 flex-col gap-2.5 after:content-[''] after:inset-x-0 after:bottom-0 after:w-full after:h-px after:bg-white/70"
          >
            First Name
            <input
              className="text-white/70 outline-none bg-transparent "
              type="text"
              name="first"
              id="first"
              placeholder="Alice"
            />
          </label>
        </div>

        <div className="flex gap-12">
          <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
            03
          </span>
          <label
            htmlFor=""
            className="inline-flex flex-1 flex-col gap-2.5 after:content-[''] after:inset-x-0 after:bottom-0 after:w-full after:h-px after:bg-white/70"
          >
            Last Name
            <input
              className="text-white/70 outline-none bg-transparent "
              type="text"
              name="last"
              id="last"
              placeholder="Doe"
            />
          </label>
        </div>

        <div className="flex gap-12">
          <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
            04
          </span>
          <label
            htmlFor=""
            className="inline-flex flex-1 flex-col gap-2.5 after:content-[''] after:inset-x-0 after:bottom-0 after:w-full after:h-px after:bg-white/70"
          >
            Company/Organization Name
            <input
              className="text-white/70 outline-none bg-transparent "
              type="text"
              name="org"
              id="org"
              placeholder="Acme Corporation"
            />
          </label>
        </div>

        <div className="flex gap-12">
          <span className="flex py-[5px] px-2 justify-center items-center h-fit border border-white/70 rounded-full text-white/70 text-xs font-semibold leading-none">
            05
          </span>
          <label
            htmlFor=""
            className="relative inline-flex flex-1 flex-col gap-2.5 before:absolute before:inset-x-0 before:-bottom-6 before:content-[attr(data-help-text)] before:text-xs after:content-[''] after:inset-x-0 after:bottom-0 after:w-full after:h-px after:bg-white/70"
            data-help-text="For Federal inquiries, we will have a specialist follow-up."
          >
            How Can We Help?
            <textarea
              rows={4}
              name="inquiry"
              id="inquiry"
              className="text-white/70 outline-none bg-transparent "
              placeholder="Please type your inquiry here…"
            />
          </label>
        </div>

        <button
          type="submit"
          className="rounded-full border border-solid border-transparent w-fit transition-colors flex items-center justify-center gap-1 bg-background hover:bg-white/75 text-foreground text-sm font-semibold gap-2 h-8 px-4 after:transition after:content-['↗'] hover:after:-translate-y-1"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
