import MessageListItem from '../components/MessageListItem';
import React, { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { CardCmp } from '../components/CardCmp';

const Home: React.FC = () => {

  const [cardInputs, setCardInputs] = useState<{
    username: string,
    created: Date;
    content: string,
    photoUrls: string[];
    tags: { [tag: string]: true };
  }[]>([]);

  useIonViewWillEnter(() => {
    const list: {
      username: string,
      created: Date;
      content: string,
      photoUrls: string[];
      tags: { [tag: string]: true };
    }[] = [];
    for (let i = 0; i < 100; i++) {
      list.push({
        username: 'joefred',
        created: new Date(),
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        photoUrls: [
          'https://www.silicon.co.uk/wp-content/uploads/2012/01/wayne-Rash.jpg',
          'https://dcavozvb40vtt.cloudfront.net/api/file/0ubAiutLQU2XjZSGvd37'
        ],
        tags: {
          'hello': true,
          'world': true
        }
        
      });
    }
    setCardInputs(list);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {cardInputs.map((m, i) => <CardCmp key={i} input={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
