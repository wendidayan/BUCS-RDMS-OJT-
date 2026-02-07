export default function Layout({ children }) {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white h-full fixed">
                <div className="p-4 border-b border-gray-700">
                    <h1 className="text-xl font-bold">BUCS-RDMS</h1>
                </div>
                <nav className="mt-4">
                    <a href="#" className="block p-4 bg-gray-800">Home</a>
                    <a href="#" className="block p-4 hover:bg-gray-800">Research</a>
                    <a href="#" className="block p-4 hover:bg-gray-800">Publications</a>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 ml-64 p-6">
                {children}
            </div>
        </div>
    );
}