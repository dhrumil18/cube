// src/components/CustomerDetails.tsx
import React, { useEffect, useState } from "react";
import { Customer, Photo } from "../types";
import axios from "axios";

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Random albumId between 1 and 100
        const response = await axios.get<{ url: string }[]>(
          `https://jsonplaceholder.typicode.com/photos?_limit=9&albumId=${randomNumber}`
        );
        setPhotos(response.data.map((photo) => ({ url: photo.url })));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos(); // Fetch photos when the component mounts or customer changes

    const interval = setInterval(fetchPhotos, 10000); // Fetch new photos every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [customer]); // Depend on `customer` so the effect runs again when the customer changes

  return (
    <div className="main-review-container">
      {customer ? (
        <>
          <div className="text-container">
            <div className="title-container">
              <p className="name">{customer?.name || "-"}</p>
              <p className="email">{customer?.email || "-"}</p>
            </div>
            <p className="address">
              {customer?.address?.street + ", " + customer?.address?.city ||
                "-"}
            </p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet ullamcorper enim, eu venenatis arcu. Sed sit amet nunc
              ullamcorper, ullamcorper nibh quis, tristique lacus. Nunc
              tristique turpis quis velit pellentesque, at sagittis est tempor.
              Aliquam sed elit eget arcu tempor molestie id eget felis.
              Pellentesque pretium sem semper metus rhoncus, ac elementum tellus
              feugiat. Mauris sed magna id nibh ultrices euismod. Sed facilisis
              porttitor urna a pulvinar. Aenean a nisl ligula.
            </p>
          </div>
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <img key={index} src={photo.url} alt={`Photo ${index + 1}`} />
            ))}
          </div>
        </>
      ) : (
        <p>Select a customer to view details</p>
      )}
    </div>
  );
};

export default CustomerDetails;
