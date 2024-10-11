import React from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonImg } from '@ionic/react';
import './Recipes.css';

const Recipes: React.FC = () => {
  const recipes = [
    {
      title: 'Lasagna',
      ingredients: [
        'Pasta (lasagna sheets)',
        'Ground beef (400g)',
        'Cheese sauce',
        'Tomato sauce',
        'Grated cheese (200g)',
        'Salt, pepper, oregano'
      ],
      imageUrl: 'https://github.com/sannariipinen/Labwork-3/blob/master/lasagne.jpg?raw=true', 
    },
    {
      title: 'Tacos',
      ingredients: [
        'Corn tortillas',
        'Ground beef (400g)',
        'Salsa',
        'Grated cheese (200g)',
        'Guacamole',
        'Lettuce, tomato, onion'
      ],
      imageUrl: 'https://github.com/sannariipinen/Labwork-3/blob/master/tacos.jpeg?raw=true',
    },
    {
      title: 'Chicken Curry',
      ingredients: [
        'Chicken (400g)',
        'Curry powder',
        'Coconut milk (400ml)',
        'Onion',
        'Garlic',
        'Coriander, lime juice'
      ],
      imageUrl: 'https://github.com/sannariipinen/Labwork-3/blob/master/chicken-curry.jpeg?raw=true',
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="recipes-content">
        {recipes.map((recipe, index) => (
          <IonCard key={index} className="recipe-card">
            <div className="recipe-details">
              <IonImg src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
              <IonCardContent>
                <h2 className="recipe-title">{recipe.title}</h2>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </IonCardContent>
            </div>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Recipes;