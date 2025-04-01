// Catalog.jsx
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../components/ProductCard';
import '../global.css';

const Catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    // Datos de ejemplo (deberías reemplazarlos con tus productos reales)
    const products = [
        { id: 1, category: 'antibacteriales', name: 'BIOCLORHEX® Solución Tópica', description: 'Gel antibacterial con clorhexidina al 2%' },
        { id: 2, category: 'biogel', name: 'BIOGEL Ultrasónico', description: 'Gel para equipos de ultrasonido' },
        // ... agregar más productos
    ];

    const categories = [
        { id: 'all', name: 'Todos los productos' },
        { id: 'antibacteriales', name: 'Antibacteriales y Geles' },
        { id: 'biogel', name: 'Biogel y Soluciones Ultrasónicas' },
        { id: 'desinfectantes', name: 'Soluciones Desinfectantes' },
        { id: 'kits', name: 'Kits Médicos' },
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentProducts = filteredProducts.slice(offset, offset + itemsPerPage);

    return (
        <div className="catalog-page">
            <div className="catalog-header">
                <h1>Nuestros Productos</h1>
                <a href="https://drive.google.com/file/d/15NVln3OKnJu7ioEm_YC2-_84eFgsPu1C/view"
                    className="download-catalog-btn"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ver Catálogo Completo (PDF)
                </a>
            </div>

            <div className="catalog-container">
                {/* Sidebar de categorías */}
                <div className="category-sidebar">
                    <h3>Categorías</h3>
                    <ul>
                        {categories.map(category => (
                            <li
                                key={category.id}
                                className={selectedCategory === category.id ? 'active' : ''}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setCurrentPage(0);
                                }}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Grid de productos */}
                <div className="product-grid">
                    {currentProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            image = {product.image}
                        />
                    ))}
                </div>
            </div>

            {/* Paginación */}
            <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                pageCount={pageCount}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default Catalog;