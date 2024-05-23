import Image from "next/image";
import { FiUpload } from "react-icons/fi";


export default function Home() {
  return (
    <>
    <main className="font-primary relative bg-black py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid py-10 justify-center items-center">
          <Image width={400} height={500} src="/images/logo.png" alt="Logo"/>
          <h2 className="text-5xl text-white  text-center">Profile Generator</h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4 gap-x-4  ">
          <div className="">
              <div className="bg-primary px-4 py-6 rounded-lg ">
                  

              <div className="border-b border-gray-900/10 ">

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Name"
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2">
                <input
                  type="text"
                  name="age"
                  id="age"
                  autoComplete="age"
                  placeholder="Age"
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="mt-2">
                <input
                  id="location"
                  name="text"
                  type="location"
                  autoComplete="location"
                  placeholder="Location"
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                />
              </div>
            </div>

            
            <div className="sm:col-span-6">
              <div className="mt-2">
              <textarea
                  id="shot-desc"
                  name="shot-desc"
                  placeholder="Short description...."
                  rows={3}
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="mt-2">
                <input
                  id="hashtag"
                  name="text"
                  type="hashtag"
                  autoComplete="hashtag"
                  placeholder="Hashtag #"
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  type="text"
                  name="perk-1"
                  id="perk-1"
                  autoComplete="perk-1"
                  placeholder="Perk 1"
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  type="text"
                  name="perk-2"
                  id="perk-2"
                  autoComplete="perk-2"
                  placeholder="Perk 2"
                  className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                />
              </div>
            </div>


          </div>
        </div>




              </div>

              <div className="mt-6 flex items-center gap-x-3">
               
                <button
                  type="button"
                  className="flex rounded-lg bg-primary w-full text-center justify-center items-center px-3 py-3 text-4xl font-normal text-white shadow-sm ring-1 ring-inset ring-primary hover:bg-primary"
                >
                   <FiUpload className="h-12 w-12 text-white mr-3" aria-hidden="true" /> Upload your PFP
                </button>
              </div>
          </div>
          <div className="">2</div>
          <div className="">3</div>
        </div>
      </div>
    </main>
    
    </>
  );
}
