
import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonChip, IonIcon, IonToolbar } from '@ionic/react';
import { arrowRedoOutline, chatboxOutline, ellipsisVerticalOutline, heartOutline } from 'ionicons/icons';
import * as React from 'react';
type CardCmpProps = {
    input: {
        username: string,
        created: Date;
        content: string,
        photoUrls: string[];
        tags: { [tag: string]: true };
    }
}
export const CardCmp: React.FC<CardCmpProps> = ({ input }) => {

    return (<IonCard>
        <IonCardHeader>
            <IonToolbar color="light">
                <IonAvatar slot="start">
                    <img src="https://www.silicon.co.uk/wp-content/uploads/2012/01/wayne-Rash.jpg" />
                </IonAvatar>
                {input.username}
                <div className="card-date"> {input.created.toLocaleString()}</div>
                <IonButtons slot="end">
                    <IonButton fill="clear" slot="icon-only" color="dark">
                        <IonIcon icon={ellipsisVerticalOutline} className="card-ellipsis" />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonCardHeader>
        <IonCardContent>
            <div className="ion-padding-start ion-padding-end ion-padding-top ion-margin-bottom post-card-content">
                {input.content}
            </div>
            <div className="tags-bar">{Object.keys(input.tags).map((tag, index) => <IonChip key={index}>
                <strong>
                    #{tag}
                </strong>
            </IonChip>)}</div>
            <div className="ion-padding" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                {input.photoUrls.map((url, i) => <div key={i} style={{ width: '33%' }}>
                    <div style={{ height: '84px', width: '84px' }}><img src={url} /></div>
                </div>)}
            </div>
        </IonCardContent>
        <div style={{ display: 'flex', height: '100%', justifyContent: 'space-evenly', marginTop: '10px', paddingBottom: '10px' }}>
            <IonButton fill="clear" color="primary"
                style={{ width: '33%' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <IonIcon icon={chatboxOutline} style={{ fontSize: '25px', paddingBottom: '4px' }}></IonIcon>
                    <br />
            Comment
          </div>
            </IonButton>

            <IonButton fill="clear" color="primary"
                style={{ width: '33%' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <IonIcon icon={heartOutline} style={{ fontSize: '25px', paddingBottom: '4px' }}></IonIcon>
                    <br />
            Favorite
          </div>
            </IonButton>

            <IonButton fill="clear" color="primary"
                style={{ width: '33%' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <IonIcon icon={arrowRedoOutline} style={{ fontSize: '25px', paddingBottom: '4px' }}></IonIcon>
                    <br />
           Share
        </div>
            </IonButton>

        </div>
    </IonCard>)
}
