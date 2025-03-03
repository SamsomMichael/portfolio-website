"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Banno (Jack Henry & Associates)",
      location: "Remote",
      period: "Feb 2024 - Present",
      role: "Software Engineer, Full Stack",
      responsibilities: [
        "Developed and maintained microservices architecture using Spring Boot, ensuring modularity and scalability.",
        "Designed and optimized SQL queries, stored procedures, and triggers for efficient data retrieval and manipulation.",
        "Built interactive and responsive web applications using React, improving user experience and engagement.",
        "Integrated OutSystems solutions with third-party APIs, enhancing application functionality and streamlining processes.",
        "Implemented state management solutions like Redux for better control over complex React application states.",
        "Created RESTful APIs and backend services using C#, ensuring seamless communication between front-end and database layers.",
        "Utilized Docker and Kubernetes for containerized deployment of applications in production environments.",
        "Collaborated with cross-functional teams to implement Agile best practices, improving project delivery timelines.",
      ],
    },
    {
      company: "Ministry of Tourism",
      location: "Asmara, Eritrea",
      period: "Mar 2020 - June 2022",
      role: "Java Developer/QA",
      responsibilities: [
        "Designed and developed scalable applications using OutSystems, ensuring alignment with business requirements and performance optimization.",
        "Implemented unit testing frameworks like MSTest and NUnit for C# applications to ensure code reliability and quality.",
        "Performed ETL processes to transform raw data into actionable insights using SQL tools and techniques.",
        "Built custom widgets and reusable components in OutSystems to improve development efficiency and maintain consistency.",
        "Integrated React components with RESTful APIs, ensuring seamless data flow between front-end and backend systems.",
        "Led efforts to improve database performance and optimize SQL queries, reducing application latency by 20%",
      ],
    },
    {
      company: "Commercial bank of Eritrea",
      location: "Asmara, Eritrea",
      period: "Nov 2017 - Nov 2019",
      role: "Software Developer",
      responsibilities: [
        "Authored and developed web-based applications utilizing Java, Spring Boot, and Hibernate/JPA.",
        "Executed RESTful web services using Java technologies to enhance application interoperability.",
        "Orchestrated a comprehensive system audit across multiple modules employing AOP (Aspect-Oriented Programming).",
        "Crafted import interfaces to facilitate data ingestion from Excel into the system.",
        "Collaborated on microservices architecture to improve scalability and modularity of applications.",
        "Leveraged Spring Data for efficient database interactions and streamlined data access.",
        "Acquired proficiency in front-end technologies including HTML, CSS, and Bootstrap for responsive design.",
        "Participated in deploying applications on AWS and Azure for enhanced cloud performance.",
        "Executed real-time data processing solutions using Kafka for improved system reliability.",
        "Supervised the integration of React to create dynamic and user-friendly interfaces.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

