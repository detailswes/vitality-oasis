import React, { useState } from 'react';

// Define the interface for heroSectionData
interface HeroSectionData {
  heading: string;
  description: string;
  subheading: string;
}

// Define the interface for the component props
interface HeroSectionFormProps {
  heroSectionData: HeroSectionData;
}

const HeroSectionForm: React.FC<HeroSectionFormProps> = ({ heroSectionData }) => {
  // State for form data with appropriate types
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
  });

  // State for form errors with appropriate types
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    telephone: '',
  });

  // Validation function to check the fields
  const validateField = (field: string, value: string): string => {
    if (field === 'fullName' && !value) return 'Full name is required';
    if (field === 'telephone' && !/^\d{10}$/.test(value)) return 'Telephone must be 10 digits';
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) return 'Invalid email address';
    return '';
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!Object.values(errors).includes('')) {
      console.log('Form submitted:', formData);
      alert('Your coverage check request has been submitted!');
    }
  };

  return (
    <div>
      <h1 className="text-4xl">{heroSectionData.heading}</h1>
      <p>{heroSectionData.description}</p>
      <p>{heroSectionData.subheading}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Name"
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            placeholder="Contact Number"
            onChange={handleChange}
          />
          {errors.telephone && <p>{errors.telephone}</p>}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default HeroSectionForm;
