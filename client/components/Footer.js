import Image from "next/image";

const Footer = () => {
  return (
    // Footer
    <section className="py-20">
      <div
        className="container px-4 mx-auto wow animate__animated animate__fadeIn"
        data-wow-delay=".3s"
      >
        <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
          <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
            <a
              className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none"
              href="index.html"
            >
              <Image
                width={200}
                height={50}
                objectFit="contain"
                src="/logo/ntts-v2.png"
                alt="NTTS"
              />
              {/* <h2
                className="md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Software
                <span className="text-blue-500">Sewa</span>
              </h2> */}
            </a>
          </div>
          <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
              Helping you <strong>maximize</strong> your reach
            </p>
          </div>
          <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
              Office
            </p>
            <p className="lg:text-lg text-blueGray-400">
              Sinamangal, Kathmandu, Nepal
            </p>
          </div>
          <div className="w-full lg:w-1/5 px-3">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
              Contacts
            </p>
            <p className="lg:text-lg text-blueGray-400">(+977) 9876543210</p>
            <p className="lg:text-lg text-blueGray-400">itnttsnepal</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <p className="text-sm text-blueGray-400">
            © 2022. All rights reserved. Designed by
            <a className="text-blue-400" href="nttsnepal.com" target="_blank">
              nttsnepal.com
            </a>
          </p>
          <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
            <a className="inline-block px-2" href="https://facebook.com/">
              <Image
                width={20}
                height={20}
                src="/icons/facebook-blue.svg"
                alt="NTTS"
              />
            </a>
            <a className="inline-block px-2" href="https://twitter.com/">
              <Image
                width={20}
                height={20}
                src="/icons/twitter-blue.svg"
                alt="NTTS"
              />
            </a>
            <a className="inline-block px-2" href="https://www.instagram.com/">
              <Image
                width={20}
                height={20}
                src="/icons/instagram-blue.svg"
                alt="NTTS"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
