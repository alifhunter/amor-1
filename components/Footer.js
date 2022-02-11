export default function Footer() {
  return (
    <footer className="container mx-auto mt-8">
      <section className="grid px-4 py-2 grid-cols-1 md:grid-cols-4 gap-16">
        <div className="">
          <h1 className="font-semibold text-xl">Layanan</h1>
          <ul>
            <li class="mt-5 mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 text-sm hover:underline"
              >
                Web hosting unlimited
              </a>
            </li>
            <li class="mt-2 mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 text-sm hover:underline"
              >
                Dedicated hosting VPS
              </a>
            </li>
            <li class="mt-2 mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 text-sm hover:underline"
              >
                Domain Registration
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Kontak</h1>
          <ul>
            <li class="mt-5 mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 text-sm hover:underline"
              >
                Telp: +628123456789
              </a>
            </li>
            <li class="mt-2 mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 text-sm hover:underline"
              >
                Email: admin@amorhost.biz.id
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h1 className="font-semibold text-xl">Alamat</h1>
          <p className="mt-4 text-sm font-light text-gray-700 leading-loose">
            Jl. Jenggala Raya no. 29 Kelurahan Bencongan Indah Kecamatan Kelapa
            Dua, Kabupaten Tangerang, Banten, Indonesia 15138
          </p>
        </div>
      </section>
      <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <section className="px-4 py-4 md:flex md:items-center md:justify-between">
        <p className="text-xs text-gray-800">
          Copyright (c) 2022, Amorhost. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-800">Made with love by Sabyq</p>
      </section>
    </footer>
  );
}
