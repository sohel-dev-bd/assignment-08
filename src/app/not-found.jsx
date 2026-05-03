import Link from 'next/link';


const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <div className='border shadow-md px-5 py-12 rounded-lg bg-teal-100'>
                
            <h1 className="text-9xl font-bold text-teal-700">404</h1>
            <div>
                <h2 className="text-3xl font-semibold text-slate-800 mb-2">
                    Oops! Page Not Found
                </h2>
                <p className="text-slate-500 max-w-md mx-auto mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-500 transition-all shadow-lg"
                > Back to Home
                </Link>
            </div>
            </div>
        </div>
    );
};

export default NotFound;