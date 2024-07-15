import React from "react";
import Footer from "../pages/footer";

const Gallery = () => {
  // Sample customer images (replace with actual paths and data)
  const customerImages = [
    {
      id: 1,
      imageUrl:
        "https://ik.imagekit.io/laxmifinance/WhatsApp%20Image%202024-07-15%20at%2010.51.09%20AM.jpeg?updatedAt=1721024582423",
      caption: "Customer 1 - Business Loan",
    },
    {
      id: 2,
      imageUrl:
        "https://ik.imagekit.io/laxmifinance/WhatsApp%20Image%202024-07-15%20at%2010.51.09%20AM%20(1).jpeg?updatedAt=1721024565422",
      caption: "Customer 2 - Business Expansion",
    },
    {
      id: 3,
      imageUrl:
        "https://www.powerforall.org/application/files/thumbnails/preview_thumb/7815/4999/6667/Rupa_Kumari_3_EED_Printing_and_copying_shop_Dumersan_Bihar.jpg",
      caption: "Customer 3 - Education Loan",
    },
    {
      id: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GiAlQZLi-_Yez85xVNrLwzX0W3ZFPMJ7qUDbVNGizdfi7GlWLaUsoNPU&s=10",
      caption: "Customer 4 - Meetings",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Customer Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {customerImages.map((customer) => (
            <div
              key={customer.id}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <img
                src={customer.imageUrl}
                alt={customer.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold">{customer.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
