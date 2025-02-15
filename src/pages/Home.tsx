import ContactList from '@/components/ContactList'

export default function Home() {
   return (
      <>
         <ContactList />

         <div className="flex items-center max-w-sm p-6  my-6 bg-white mx-auto shadow-lg  rounded-xl gap-4 dark:bg-slate-800 dark:shadow-none">
            <img className="size-12" src="/images/chaticon.svg" alt="icon" />
            <div>
               <div className="text-xl font-bold text-black dark:text-white">ChaitChat</div>
               <p className="text-gray-500 dark:text-gray-400">A simple chat application</p>
            </div>
         </div>

         <div className="flex flex-col  items-center gap-4 p-6">
            <button className=" btn btn-primary">Primary</button>
            <button className=" btn btn-secondary">Secondary</button>
            <button className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded w-35 hover:bg-red-600 active:bg-red-700">Danger</button>
            <button className="px-4 py-2 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-700 text-white rounded w-35 ">
               Gradient
            </button>
            <button className="px-4 py-2 cursor-pointer  bg-blue-500 text-white rounded w-35 hover:bg-blue-600 active:bg-blue-700 shadow-lg">
               Shadow
            </button>
            <button className="px-4 py-2 cursor-pointer  bg-purple-500 text-white  w-35 hover:bg-purple-600 active:bg-purple-700 shadow-lg rounded-full">
               Rounded
            </button>
            <button
               className="px-4 py-2  bg-purple-500 text-white  w-35 hover:bg-purple-600 active:bg-purple-700 shadow-lg rounded-full cursor-not-allowed opacity-50"
               disabled
            >
               Disabled
            </button>
            <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded w-35 hover:bg-blue-600 active:bg-blue-700 flex items-center gap-2">
               <img className="size-4" src="/images/chaticon.svg" alt="icon" />
               Button
            </button>
            <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded w-35 hover:bg-blue-600 active:bg-blue-700  active:scale-95 transition-transform">
               Button
            </button>
         </div>
      </>
   )
}
