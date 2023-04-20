import logo from "../assets/image/logo.png";
const Contact = () => {
  return (
    <div className="my-3">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-14 w-auto" src={logo} alt="Your Company"/>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Contact Us</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                </div>
                <div className="mt-2">
                  <input id="name" name="name" type="text" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="MobileNo" className="block text-sm font-medium leading-6 text-gray-900">Mobile No.</label>
                </div>
                <div className="mt-2">
                  <input id="MobileNo" name="MobileNo" type="text" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">submit</button>
              </div>
            </form>
          </div>
        </div>

    </div>

  );
};

export default Contact