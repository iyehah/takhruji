"use client"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function ServiceCards() {
  const services = [
    {
      title: "Marketing",
      description: "Professional strategies to promote your brand effectively.",
      image: "/images/marketing.png",
    },
    {
      title: "Photography",
      description: "Capture moments with stunning, high-quality photography.",
      image: "/images/camera.png",
    },
    {
      title: "Montage",
      description: "Creative video editing and montage services to tell your story.",
      image: "/images/video.png",
    },
    {
      title: "Design",
      description: "Innovative designs tailored to your vision and requirements.",
      image: "/images/design.png",
    },
    {
      title: "Dress Design",
      description: "Custom dress designs for all occasions with a unique touch.",
      image: "/dress-design.png",
    },
    {
      title: "Congratulations",
      description: "Specialized services for celebrating your happy moments.",
      image: "/images/congratulations.png",
    },
  ];

  return (
    <>
    <Header/>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 py-12 bg-white">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white cursor-pointer group rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-52 object-cover mx-auto bg-yellow-200"
          />
          <div className="p-6 bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-100">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}
