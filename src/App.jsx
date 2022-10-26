import aboutImg from './assets/splash.jpg'

function App() {
  return (
    <article className="cv min-h-screen max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12">
      <section className="col-span-3 md:col-span-4 xl:col-span-3 px-6 py-8">
        <div className="flex justify-center py-8">
          {/* <img
            src={aboutImg}
            className="w-36 h-50 object-cover ring-2 ring-gray-900 rounded-full bg-white p-0.5"
          /> */}
        </div>
        <div className="pl-8 border-l border-gray-900">
          <div className="mb-8">
            <div>
              <h1 className="text-4xl uppercase tracking-[2px]">Jhon Steven</h1>
              <h1 className="text-4xl uppercase font-bold tracking-[2px]">
                Saavedra
              </h1>
              <p className="uppercase">Web UI Developer</p>
            </div>
          </div>
          <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-gray-900 before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
            Contactame
          </h5>
          <ul>
            <li className="inline-flex gap-2 mb-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>+57 3245769120</span>
            </li>
            <li className="inline-flex gap-2 mb-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>Bogotá, Colombia</span>
            </li>
            <li className="inline-flex gap-2 mb-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>jsgsco@icloud.com</span>
            </li>
          </ul>
          <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-gray-900 before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
            Idiomas
          </h5>
          <ul>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Español</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">100%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Ingles</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">50%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Portugues</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
          </ul>
          <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-gray-900 before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
            Habilidades
          </h5>
          <ul>
          <li className="inline-flex items-center gap-4 text-sm">
              <span>JavaScript</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">90%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>React.js</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">90%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Node.js</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">60%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Tailwind CSS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>PySpark</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">50%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Apache Kafka</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Apache Flume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">65%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Apache Oozie</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">78%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Apache Hive</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Apache Kudu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Hadoop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Linux</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">70%</span>
            </li>
            <li className="inline-flex items-center gap-4 text-sm">
              <span>Git</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">90%</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="col-span-9 md:col-span-8 xl:col-span-9 px-8 py-4 border-l border-gray-900">
        <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-gray-900 before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
          Sobre mi
        </h5>
        <p className="text-gray-500 text-sm text-justify">
        Analista y Desarrollador de Sistemas de Información con experiencia en desarrollo web usando JavaScript tanto del lado del cliente como del lado del servidor, también con experiencia en big data en cloudera usando Apache Flume, Apache AirFlow, Apache Kafka y Apache Spark (PySpark) en procesos ETL.
        </p>
        <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-gray-900 before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
          Escolaridad
        </h5>
        <ul>
          <li className="mb-8">
            <h4 className="text-sm font-bold uppercase mb-4">
              Servicio Nacional de Aprendizaje
            </h4>
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="font-extrabold">2020</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">2022</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>Titulado en</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span>Analisis y Desarrollo de Sistemas de la Información</span>
            </div>
          </li>
          <li className="mb-8">
            <h4 className="text-sm font-bold uppercase mb-4">
              Universidad Iberoamericana
            </h4>
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="font-extrabold">2020</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span className="font-extrabold">Actualmente</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>Ingeneria en Desarrollo de Software</span>
            </div>
          </li>
        </ul>
        <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-gray-900 before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
          Experiencia
        </h5>
        <ul>
          <li className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase">
                Dicmaj Technology
              </span>
              <span className="text-sm font-bold uppercase">
                2020 - 2021
              </span>
            </div>
            <p className="text-gray-500 text-sm text-justify">
              Realice trabajos de diseño de ui ux, migrando de una biblioteca a otra, también desarrolle interfaces usando React.js con Bulma CSS.
            </p>
          </li>
          <li className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase">
                Woombat Consulting Group
              </span>
              <span className="text-sm font-bold uppercase">
                2021 - Actualmente
              </span>
            </div>
            <p className="text-gray-500 text-sm text-justify">
              Migrar de un clúster cloudera a otro cloudera, la migración fue herramientas específicas como ETLS, servicios de streaming, tambien he realizado desarrollos web en React.js y un poco de PySpark en otros proyectos.
            </p>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default App
