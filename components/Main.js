import { BadgeCheckIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function Main() {
  return (
    <main className="flex-1 lg:mt-24">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline font-ubuntu">
              Beli Hosting Bisa
            </span>{" "}
            <span className="block xl:block mt-4 font-ubuntu">
              Tinggal Chat
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
            Pesan layanan hosting web setahun dan <br></br> dapatkan domain
            gratis .ID!
          </p>
          <button className="mt-3 md:mt-8 sm:flex sm:justify-center lg:justify-start shadow-purple">
            <a
              href="#"
              className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base rounded-md text-white bg-darkPurple hover:bg-softPurple md:py-2 md:text-lg md:px-8"
            >
              Pilih Sekarang
            </a>
          </button>
          <p className="mt-3 text-sm text-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-sm lg:mx-0">
            <div>
              <BadgeCheckIcon
                className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                aria-hidden="true"
              />
              30-days money-back guarantee
            </div>
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2 hidden md:block">
          <img
            className="w-full h-full max-w-xl lg:mt-8 mx-auto"
            src="/hero.png"
            alt="web hosting"
            srcSet=""
          />
        </div>
      </section>
      <section className="container px-4 py-12 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
        <div className="w-full m:w-1/3 bg-white-100">
          <div class="flex items-start mb-8">
            <div class="w-1/5">
              <img className="w-20" src="/hardware.png" alt="" srcSet="" />
            </div>
            <div className="w-4/5 px-4">
              <div>
                <span class="font-semibold text-lg text-gray-800">
                  Hardware Handal
                </span>
              </div>
              <div>
                <span class="text-gray-400 font-light">
                  Performa server diatas rata- rata dibandingkan spesifikasi
                  server serupa.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m:w-1/3 bg-white-100">
          <div class="flex items-start mb-8">
            <div class="w-1/5">
              <img className="w-20" src="/datacenter.png" alt="" srcSet="" />
            </div>
            <div className="w-4/5 px-4">
              <div>
                <span class="font-semibold text-lg text-gray-800 mt-4">
                  Datacenter Pilihan
                </span>
              </div>
              <div>
                <span class="text-gray-400 font-light">
                  Server dan data terjamin secara fisik di datacenter pilihan
                  dengan performa terbaik. Serta jaminan uptime 99%.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m:w-1/3 bg-white-100">
          <div class="flex items-start mb-8">
            <div className="w-1/5">
              <img className="w-20" src="/support.png" alt="" srcSet="" />
            </div>
            <div className="w-4/5 px-4">
              <div>
                <span class="font-semibold text-lg text-gray-800">
                  Support Terbaik
                </span>
              </div>
              <div>
                <span class="text-gray-400 font-light">
                  Memiliki pengalaman tentang Web Hosting dan Server sejak tahun
                  2013.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-4 m:py-12 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
        <div className="w-full p-12 shadow-purple bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-center">
          <h1 className="text-2xl pt-7 tracking-tight font-bold font-ubuntu text-white sm:text-4xl md:text-5xl">
            Periksa nama domain kamu, pilih yang keren!
          </h1>
          <p className="mt-3 text-sm text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-sm">
            Ketik nama domain pilihan kami dan pilih ekstensi domain dari banyak
            pilihan! (Pilih dari .com, .net, .org. .id dan banyak lagi)
          </p>
          <div className="mt-7 rounded-md pb-7 grid justify-items-center">
            <form
              action="#"
              className="flex flex-wrap justify-center md:flex-row w-2/3"
            >
              <input
                type="search"
                className="flex-1 h-10 rounded px-6 m-1 text-gray-700 placeholder-gray-400 bg-white border-none appearance-none lg:h-16 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                placeholder="Search your domain name..."
                required="required"
                name=""
                id=""
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-6 m-1 text-white transition-colors duration-200 transform rounded-md sm:w-8 sm:h-8 lg:w-16 lg:h-16 lg:p-0 bg-primary hover:bg-slate-400 focus:outline-none focus:bg-teal-300"
              >
                <SearchIcon className="w-8 h-8" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="relative bg-bgPurple2 dark:bg-gray-800 pb-16">
        <img src="/wave.png" alt="" className="bg-wave" srcSet="" />
        <div className="container px-4 py-12 mt-24 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
          <div className="w-full text-center">
            <h1 className="text-2xl pt-16 tracking-tight font-bold font-ubuntu text-darkPurple2 sm:text-4xl md:text-5xl">
              Pilih Paket Hosting Unlimited
            </h1>
            <p className="mt-3 text-sm text-grey-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-sm">
              Layanan web hosting Indonesia terbaik dengan fitur hosting
              terlengkap dan dukungan support 24 jam untuk kemudahan Anda meraih
              kesuksesan online!
            </p>
          </div>
        </div>
        {/* pricing list */}
        <div className="container px-4 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
          <div className="pricing w-full mt-8">
            {/* Plan bisnis */}
            <div className="w-full mb-14 md:mb-0 md:w-1/3 text-center">
              <div className="plan">
                <h1 className="text-lg md:text-2xl font-ubuntu font-bold text-darkPurple2 mb-1">
                  Bisnis
                </h1>
                <p className="text-sm">Cocok untuk website bisnis kecil</p>
                <p class="text-black dark:text-white text-2xl font-bold mt-2">
                  <span className="text-sm">Rp</span>56.250
                  <span className="text-sm text-gray-500 font-light">
                    /bulan
                  </span>
                </p>
                <button className="mt-3 md:mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-2 border border-slate-500 hover:border-slate-700 text-base rounded-md md:py-2 md:text-base md:px-14"
                  >
                    Pilih Paket
                  </a>
                </button>
                <span class="w-full block bg-slate-200 h-1 rounded-lg my-6"></span>
                <div>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited NVMe SSD (Fair Usage)
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Bandwidth
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Domain
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Sub Domain
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Databases MySQL
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Email
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Free SSL
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    SSH Access
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Daily Backup
                  </p>
                </div>
                <p className="mt-8 font-semibold">
                  <a href="http://">Lihat semua fitur</a>
                </p>
              </div>
            </div>
            {/* Plan standar */}
            <div className="w-full mb-2 md:mb-0 md:w-1/3 text-center">
              <div className="plan popular">
                <span className="w-full p-3 text-lg span1">Terlaris!</span>
                <h1 className="text-lg md:text-2xl font-ubuntu font-bold text-darkPurple2 mb-1">
                  Standar
                </h1>
                <p className="text-sm">Paket sempurna untuk website pribadi!</p>
                <p class="text-black dark:text-white text-2xl font-bold mt-2">
                  <span className="text-sm">Rp</span>25.000
                  <span className="text-sm text-gray-500 font-light">
                    /bulan
                  </span>
                </p>
                <button className="mt-3 md:mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base rounded-md text-white bg-darkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 md:py-2 md:text-lg md:px-14"
                  >
                    Pilih Paket
                  </a>
                </button>
                <span class="w-full block bg-slate-200 h-1 rounded-lg my-6"></span>
                <div>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited NVMe SSD (Fair Usage)
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Bandwidth
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    3 Domain
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    10 Sub Domain
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    10 Databases MySQL
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    10 Email Address
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Free SSL
                  </p>
                </div>
                <p className="mt-8 font-semibold">
                  <a href="http://">Lihat semua fitur</a>
                </p>
              </div>
            </div>
            {/* Plan pemula */}
            <div className="w-full mb-2 md:mb-0 md:w-1/3 text-center">
              <div className="plan">
                <h1 className="text-lg md:text-2xl font-ubuntu font-bold text-darkPurple2 mb-1">
                  Pemula
                </h1>
                <p className="text-sm">Solusi ideal bagi pemula</p>
                <p class="text-black dark:text-white text-2xl font-bold mt-2">
                  <span className="text-sm">Rp</span>15.000
                  <span className="text-sm text-gray-500 font-light">
                    /bulan
                  </span>
                </p>
                <button className="mt-3 md:mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-2 border border-slate-500 hover:border-slate-700 text-base rounded-md md:py-2 md:text-base md:px-14"
                  >
                    Pilih Paket
                  </a>
                </button>
                <span class="w-full block bg-slate-200 h-1 rounded-lg my-6"></span>
                <div>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited NVMe SSD (Fair Usage)
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-green-500"
                      aria-hidden="true"
                    />{" "}
                    Unlimited Bandwidth
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    1 Domain
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    5 Sub Domain
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    5 Databases MySQL
                  </p>
                  <p className="text-sm text-left mb-3">
                    <CheckCircleIcon
                      className="w-5 h-5 ml-2 mr-2 inline text-orange-400"
                      aria-hidden="true"
                    />{" "}
                    5 Email Address
                  </p>
                </div>
                <p className="mt-8 font-semibold">
                  <a href="http://">Lihat semua fitur</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-4 m:py-12 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
        <div className="w-full md:w-1/2 lg:text-left bg-white">
          <h1 className="text-2xl pt-16 tracking-tight font-bold font-ubuntu text-darkPurple2 sm:text-3xl md:text-3xl">
            Kami telah melayani
          </h1>
          <div className="my-8">
            <div className="border-l-4 border-l-indigo-500 p-1 pl-4 my-4">
              <p className="font-bold text-2xl">9</p>
              <p>Total pelanggan</p>
            </div>
            <div className="border-l-4 border-l-red-500 p-1 pl-4 my-4">
              <p className="font-bold text-2xl">20 lebih</p>
              <p>Server yang dikelola</p>
            </div>
            <div className="border-l-4 border-l-cyan-500 p-1 pl-4 my-4">
              <p className="font-bold text-2xl">100%</p>
              <p>Pelanggan puas</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:text-left bg-white">
          <h1 className="text-2xl pt-16 tracking-tight font-bold font-ubuntu text-darkPurple2 sm:text-3xl md:text-3xl">
            Apa kata mereka?
          </h1>
          <div className="my-8">
            <div className="bg-bgPurple2 dark:bg-gray-800 w-full shadow mx-auto rounded p-4 px-8">
              <p class="text-gray-900 dark:text-white">
                <span class="font-bold text-darkPurple2 text-3xl">“</span>
                Amorhost murah meriah tapi tidak pernah ada masalah, support
                ramah dan selalu siap membantu jika saya ada kesulitan. Thanks
                Amorhost, semoga makin jaya dan dijaga pelayanannya yang sudah
                bagus ini!
              </p>
              <div class="flex items-center mt-4">
                <div class="flex flex-col justify-between">
                  <span class="font-semibold text-darkPurple2 text-sm">
                    Bames Jond
                  </span>
                  <span class="dark:text-gray-400 text-xs mt-1 flex items-center">
                    Aktor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-2 md:py-10 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
        <div className="w-full m:w-1/2 lg:text-left bg-white">
          <h1 className="text-2xl pt-10 tracking-tight font-bold font-ubuntu text-darkPurple2 sm:text-3xl md:text-3xl">
            Teknologi yang kami gunakan
          </h1>
          <img className="p-8 md:p-16" src="/tech.png" alt="" srcSet="" />
        </div>
      </section>
      <section className="container px-4 py-2 md:py-8 mx-auto lg:h-auto lg:space-x-8 lg:flex lg:items-start">
        <div className="overflow-hidden relative z-10 w-full p-12 shadow-purple bg-gradient-to-r from-darkPurple via-purple-600 to-softPurple rounded text-left">
          <img src="/suara.png" className="bg-suara" alt="" srcSet="" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-2xl pt-7 tracking-tight font-bold font-ubuntu text-white sm:text-2xl md:text-3xl">
                Mulai buat website dengan kami
              </h1>
              <p className="py-4 pb-7 text-white">
                Pilih paket dan luncurkan website dalam hitungan menit
              </p>
            </div>
            <div className="self-center justify-self-end">
              <button className="bg-white text-darkPurple px-8 rounded py-3 sm:flex sm:justify-center lg:justify-start shadow">
                <a href="http://" className="font-semibold">
                  Pesan Sekarang
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
