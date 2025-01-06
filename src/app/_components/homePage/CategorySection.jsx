// app/components/CategorySection.tsx
import React from 'react';

const CategorySection = () => {
    const categories = [
        { image: '/fotos/3.jpg', title: 'Alkoholfreie Getränke' },
        { image: '/fotos/13.jpg', title: 'Backwaren' },
        { image: '/fotos/11.jpg', title: 'Eier, Milch & Butter' },
        { image: '/fotos/12.jpg', title: 'Gemüse' },
    ];

    return (
        <section className="py-10 px-5">
            
            <div className="flex flex-wrap justify-center">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center mx-4 mb-8">
                        <img 
                            src={category.image} 
                            alt={category.title} 
                            className="w-32 h-32 object-cover mb-2" // Görsel boyutunu ayarlayın
                        />
                        <h3 className="text-lg font-medium" style={{color:'#002855'}}>{category.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;