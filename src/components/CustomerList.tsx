import { useEffect, useState } from "react";
import { Customer } from "../types";
import axios from "axios";
import CustomerDetails from "./CustomerDetails";

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get<Customer[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    if (selectedCustomerId !== null && selectedCustomerId !== -1) {
      const customer =
        customers.find((c) => c.id === selectedCustomerId) || null;
      setSelectedCustomer(customer);
    }
  }, [selectedCustomerId, customers]);

  return (
    <div className="main-container">
      <div
        className={`customer-container ${
          selectedCustomerId !== null && selectedCustomerId !== -1
            ? "customer-container-width"
            : ""
        }`}
      >
        {customers.map((customer) => (
          <div
            key={customer.id}
            onClick={() => {
              if (selectedCustomerId != customer.id) {
                setSelectedCustomerId(customer.id);
              } else {
                setSelectedCustomerId(-1);
              }
            }}
            className={`customer-item ${
              selectedCustomerId === customer.id ? "customer-item-selected" : ""
            }`}
          >
            <p className="name">{customer.name}</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet ullamcorper enim, eu venenatis arcu. Sed sit amet nunc
              ullamcorper, ullamcorper nibh quis, tristique lacus. Nunc
              tristique turpis quis velit pellentesque
            </p>
          </div>
        ))}
      </div>
      {selectedCustomerId !== null && selectedCustomerId !== -1 ? (
        <CustomerDetails customer={selectedCustomer} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomerList;
