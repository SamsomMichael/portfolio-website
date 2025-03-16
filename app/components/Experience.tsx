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
       "Authored and maintained front-end applications using Angular, HTML5, CSS3, and Bootstrap for responsive design.",
       "Executed and managed Java-based enterprise applications with Spring Boot, Hibernate, Spring MVC, and RESTful web services.",
       "Developed and integrated applications with web services, APIs, and Kafka for real-time data processing and messaging.",
       "Collaborated on designing and implementing a Balance Sheet application with a focus on both front-end and back-end components.",
       "Acquired proficiency in cloud management and deployment using DevOps tools (Kubernetes, Git, Jenkins, Ant, Maven) on AWS, reducing deployment time by 40%.",
       "Configured CI/CD pipelines with Jenkins, performed unit testing with JUnit, and utilized Git for version control, including branch merging and conflict resolution.",
       "Facilitated efficient application security enhancements using Spring Security and OAuth, achieving a 30% reduction in security incidents.",
       "Crafted dynamic web interfaces with JavaScript, jQuery, React, and Bootstrap to ensure optimal user experience and functionality.",
       "Orchestrated end-to-end development life cycles leveraging AGILE (SCRUM) methodology and test-driven development (TDD), accomplishing 25% faster project delivery.",
       "Analyzed IT environments to identify critical capabilities and recommend solutions, participating in stakeholder discussions for sprint and PI planning.",
       "Supervised incident management and alert handling using Jira, ServiceNow, and Splunk for effective issue resolution and operational efficiency.",
       "Collaborated on microservices architecture design and implementation to enhance application scalability and modularity.",
      ],
    },
    {
      company: "Ministry of Tourism",
      location: "Asmara, Eritrea",
      period: "Mar 2020 - June 2022",
      role: "Java Developer",
      responsibilities: [
        "Authored web applications and facilitated maintenance, testing, and support for high-quality code and services.",
        "Analyzed project requirements and transformed them into comprehensive technical specifications.",
        "Crafted client-side RESTful applications and developed various desktop solutions.",
        "Executed data storage and retrieval using MySQL and MongoDB databases.",
        "Collaborated on microservices architecture to enhance application scalability and maintainability.",
        "Acquired proficiency in Spring Boot and Spring MVC for robust backend development.",
        "Leveraged Kafka for real-time data processing and messaging solutions.", 
        "Orchestrated user interfaces using HTML, CSS, Bootstrap, and React for seamless user experiences.",
        "Participated in cloud deployment strategies using AWS and Azure for improved application performance.",
        "Supervised testing and debugging processes utilizing JUnit and Hibernate to ensure code quality.",
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

