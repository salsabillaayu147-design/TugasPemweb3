import { Link } from "react-router-dom";    

export default function CategoryIndex() {
    return (
        <div>
            <h1>Category Index</h1>

            <Link to="/dashboard/category/create" 
            className="p-2 bg-blue-500 text-white rounded">
                Add New Category
            </Link>
        </div>
    );
}