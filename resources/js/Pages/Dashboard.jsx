import Layout from '@/Components/Layout';

// 🔑 MOCK DATA - no backend needed!
const mockPublications = [
    {
        id: 1,
        title: "Enhancing cacao fermentation for small-scale farmers",
        authors: "Cristopher G. Milena, Samuel C. Bobiles",
        dateSigned: "Not signed by the RC yet"
    },
    {
        id: 2,
        title: "Climate resilience in coastal communities",
        authors: "Maria L. Santos",
        dateSigned: "2024-01-15"
    }
];

export default function Dashboard() {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            {/* Publications table */}
            <div className="bg-white rounded-lg shadow mb-8">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Application for Databasing of Publication to be Sign</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author/s</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">RC Date Signed</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockPublications.map(pub => (
                                <tr key={pub.id}>
                                    <td className="px-6 py-4">{pub.title}</td>
                                    <td className="px-6 py-4">{pub.authors}</td>
                                    <td className="px-6 py-4 text-red-500">{pub.dateSigned}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">Sign</button>
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}