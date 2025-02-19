
import React from 'react';

const CategorySection = () => {
    const categories = [
        { image: '/fotos/3.jpg', title: 'Alkoholfreie Getränke' },
        { image: '/fotos/13.jpg', title: 'Backwaren' },
        { image: '/fotos/11.jpg', title: 'Eier, Milch & Butter' },
        { image: '/fotos/12.jpg', title: 'Gemüse' },
    ];

    return ( // return bilesenin render edilecegi jsx yapisini baslatir !!! Wichtig 
        <section className="py-10 px-5">
            
            <div className="flex flex-wrap justify-center">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center mx-4 mb-8">
                        <img 
                            src={category.image} 
                            alt={category.title} 
                            className="w-32 h-32 object-cover mb-2 cursor-pointer" 
                        />
                        <h3 className="text-lg font-medium cursor-pointer" style={{color:'#002855'}}> {category.title} </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;

{/* Als anonyme Funktion definierte Komponente
In dieser Definition wird die Komponente als anonyme Funktion definiert und einer Variablen mit dem Schlüsselwort const zugewiesen. 
Diese Variable wird dann mit export default exportiert.
Wir könnten die Komponent direkt benennen, indem wir sie mit dem Schlüsselwort function definieren.
Das würde uns erlauben, die Komponente später in der React DevTools zu identifizieren.
1- const caetegories ist ein Array von Objekten, die die Kategorien repräsentieren. Die objekte müssen zwischen geschweiften Klammern stehen.
2- Die map-Methode wird verwendet, um durch das categories-Array zu iterieren und für jedes Element ein neues div-Element zu erstellen.
{categories.map((category, index) => (: categories dizisini döngüye alır ve her bir kategori için bir JSX öğesi oluşturur. 
category her bir kategori nesnesini temsil ederken, index dizideki mevcut öğenin indeksini temsil eder.
3- Das div-Element enthält ein img-Element, das das Bild der Kategorie anzeigt, und ein h3-Element, das den Titel der Kategorie anzeigt.
4- Index wird als Schlüssel für das div-Element verwendet, um React zu helfen, die Elemente zu identifizieren und zu verwalten. 
Wenn index nicht verwendet wird, kann React diese Warnung ausgeben : "Each child in a list should have a unique "key" prop."
5- key={index} : React benötigt eine eindeutige key-Prop, um die Elemente in der Liste zu identifizieren und zu verwalten.
6- src={category.image} : Das src-Attribut des img-Elements wird auf den Wert des image-Eigenschaft des category-Objekts gesetzt.
7- alt={category.title} : Das alt-Attribut des img-Elements wird auf den Wert des title-Eigenschaft des category-Objekts gesetzt.
*/}