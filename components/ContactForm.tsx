export default function ContactForm() {
  function encode(data: string) {
    return Object.keys(data)
      .map(
        (key: any) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <>
      {/*A little help for the Netlify post-processing bots */}
      <form
        name="contactForm"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <section id="contact" className="bg-white/20 mx-12">
        <div className="p-4 py-8 text-center">
          Feel free to text, call, or send me an email!
          <address className="pt-2">joshua.bell.828@gmail.com</address>
          <address>828-222-8787</address>
        </div>
      </section>
    </>
  );
}
