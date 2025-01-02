"use client";
import { useState, useEffect } from 'react';
import { updateLanguage } from '../utils/Language';  // Import the new function

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");  // Default to "en"

  // Fetch the language from localStorage after the component mounts (client-side only)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    setSelectedLanguage(savedLanguage);
    updateLanguage(savedLanguage);  // Update the language in the header
  }, []);

  const handleChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);  // Save the selected language
    updateLanguage(language);  // Update the language in the header
  };

  return (
    <select
      id="language"
      className="text-[#24317e] border border-[#24317e] py-2 rounded hover:bg-[#24317e] hover:text-white"
      onChange={handleChange}
      value={selectedLanguage}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="ar">Arabic</option>
    </select>
  );
}
