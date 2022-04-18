import Image from "next/image";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        width={500}
        height={500}
        objectFit="contain"
        objectPosition="center"
        src="/loader/loader.gif"
      />
    </div>
  );
};

export default Preloader;
