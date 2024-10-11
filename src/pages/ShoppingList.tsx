import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './ShoppingList.css';

const ShoppingList: React.FC = () => {

  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');


  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="shopping-list-content">
        <IonInput 
          value={inputValue} className="add-item"
          placeholder="Add item" 
          onIonChange={(e) => setInputValue(e.detail.value!)} 
        />
        <IonButton onClick={addItem} className="add-button">Add Item</IonButton>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={index}>
              <IonLabel className="added-item">{item}</IonLabel>
              <IonButton slot="end" onClick={() => removeItem(index)}>Remove</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ShoppingList;
