// app/components/CategorySection.tsx
import React from 'react';

const CategorySection = () => {
    const categories = [
        { image: '/fotos/bannerbild1.jpg', title: 'Alkoholfreie Getränke' },
        { image: '/fotos/bannerbild2.jpg', title: 'Backwaren' },
        { image: '/fotos/bannerbild3.jpg', title: 'Eier, Milch & Butter' },
        { image: '/fotos/bannerbild4.jpg', title: 'Gemüse' },
    ];

    return (
        <section className="py-20 px-5">
            <h2 className="text-center text-2xl font-bold mb-10">Kategoriler</h2>
            <div className="flex flex-wrap justify-center">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center mx-4 mb-8">
                        <img 
                            src={category.image} 
                            alt={category.title} 
                            className="w-32 h-32 object-cover mb-2" // Görsel boyutunu ayarlayın
                        />
                        <h3 className="text-lg font-medium">{category.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;