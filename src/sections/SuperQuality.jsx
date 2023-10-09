import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex-col flex flex-1">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We provide you </span>
          <br />
          <span className="text-coral-red ">Super </span>
          <span className="text-coral-red ">Quality </span>
          Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously
          crafted footwear is designed to elevate your experience,
          providing you with unmatched quality, innovation, and a
          touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our Dedication to detail and excellence ensures your
          satisfaction.
        </p>
        <br />
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}
export default SuperQuality