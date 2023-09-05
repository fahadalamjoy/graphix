"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import messageBox from "@/public/message-box.png";

import ContactForm from "@/app/cont/react-contact";
import FooterPage from "../foot/page";

const ContactPage = () => {
  return (
    <section className="">
      <ContactForm />
    </section>
  );
};

export default ContactPage;
