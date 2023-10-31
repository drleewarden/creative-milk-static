import React from 'react'

import type { NextPage } from 'next'

import Heading from '../src/components/heading'
// import Typography from '../src/components/typography'
import styles from '../styles/Home.module.scss'

// import Nav from "../src/components/nav";

const About: NextPage = () => {
  // const downloadAction = () => {};
  return (
    <div>
      <main className={styles.main}>
        {/* <Heading classN="cm-container" /> */}
        {/* <Nav download={downloadAction()} /> */}
        {/* <Typography styleType="xl" as="h1" text={''}>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
          </Typography> */}
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-4/12 xl:w-4/12">
            <img style={{ borderRadius: '250px' }} src="images/me.jpg" />
          </div>
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-4xl font-semibold text-slate-600">
                Modern website built in the latest cutting edge technology.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                In today's digital age, having a well-designed website is crucial for businesses and
                organizations to establish their online presence and reach a wider audience. One
                technology that has become increasingly popular for building high-performing
                websites is React, a JavaScript library developed by Facebook. React's popularity is
                largely due to its ability to create complex user interfaces with reusable
                components, making it an ideal choice for building modern websites. In this article,
                we'll explore the benefits of a well-designed website using React.
                <ol className="cm-ol">
                  <li>
                    Faster loading times One of the main advantages of using React for web
                    development is its ability to create fast and responsive websites. React's
                    virtual DOM system efficiently updates the user interface, resulting in faster
                    loading times and a smoother user experience. Additionally, React's
                    component-based architecture allows for easier code reuse, reducing the amount
                    of code needed to build a website, which in turn reduces loading times.
                  </li>
                  <li>
                    Improved user experience A well-designed website using React can significantly
                    improve the user experience. React allows developers to create highly
                    interactive and responsive user interfaces, making the website feel more
                    engaging and intuitive to use. The library's component-based architecture also
                    allows for the creation of reusable UI elements, such as buttons, forms, and
                    dropdown menus, which can improve the consistency of the user experience across
                    the website.
                  </li>
                  <li>
                    Improved user experience A well-designed website using React can significantly
                    improve the user experience. React allows developers to create highly
                    interactive and responsive user interfaces, making the website feel more
                    engaging and intuitive to use. The library's component-based architecture also
                    allows for the creation of reusable UI elements, such as buttons, forms, and
                    dropdown menus, which can improve the consistency of the user experience across
                    the website.
                  </li>
                  <li>
                    Search engine optimization (SEO) A well-designed website using React can also
                    improve search engine optimization (SEO). React's fast-loading and efficient
                    code can help to improve a website's page load speed, which is a key factor in
                    search engine rankings. Additionally, React's server-side rendering capabilities
                    can help to ensure that search engines can easily crawl and index the website's
                    content. Scalability and maintainability React's component-based architecture
                    makes it easier to develop scalable and maintainable websites. Components are
                    designed to be self-contained and reusable, which makes it easier to add new
                    features and functionality to the website as needed. The modular nature of React
                    also makes it easier to debug and maintain the website's codebase, reducing the
                    risk of errors and making it easier to implement updates and changes.
                    Cross-platform compatibility Finally, a well-designed website using React is
                    compatible with a wide range of platforms and devices. React is designed to work
                    seamlessly across different browsers and operating systems, ensuring that the
                    website can be accessed and used by the widest possible audience. Additionally,
                    React Native, a framework built on top of React, can be used to develop mobile
                    applications for both iOS and Android, allowing businesses to expand their reach
                    even further. In conclusion, a well-designed website using React can offer a
                    wide range of benefits for businesses and organizations looking to establish a
                    strong online presence. From faster loading times and improved user experience
                    to better search engine rankings and cross-platform compatibility, React's
                    capabilities make it an ideal choice for building high-performing websites that
                    meet the needs of today's digital landscape.
                  </li>
                </ol>{' '}
                <a href="https://tailwindcss.com/?ref=creativetim" className="text-slate-600">
                  TailwindCSS
                </a>
                . It features multiple HTML elements and it comes with dynamic components for
                ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <a
                  className="get-started mr-1 mb-1 rounded bg-pink-500 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
                  href="/learning-lab/tailwind-starter-kit/documentation/download"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/tailwind-starter-kit"
                  className="github-star ml-1 mr-1 mb-1 rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-slate-600"
                >
                  Github Star
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
