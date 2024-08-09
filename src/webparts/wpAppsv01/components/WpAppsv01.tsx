import * as React from 'react';
import styles from './WpAppsv01.module.scss';
import type { IWpAppsv01Props } from './IWpAppsv01Props';
import { Icon } from '@fluentui/react';

export default class WpAppsv01 extends React.Component<IWpAppsv01Props, {}> {
  public render(): React.ReactElement<IWpAppsv01Props> {
    const {} = this.props;

    const AppscollectionData = [
      { name: "HelpDesk.", iconName: "LaptopSecure"},
      { name: "Dashboard", iconName: "MobileReport"},
      { name: "Announcements", iconName: "Megaphone"},
      { name: "Events Calendar", iconName: "EventDate"},
      { name: "HR Policies", iconName: "KeyPhraseExtraction"},
      { name: "Employee Directory", iconName: "EmployeeSelfService"},
      { name: "Project Management", iconName: "ProjectCollection"},
      { name: "Training & Development", iconName: "LearningTools"}
      
    ]
      
    return (
      <section className={`${styles.wpAppsv01}`}>
        <div className={styles.wpAppsv01_items}>
          {

            AppscollectionData != null ?
            AppscollectionData.map((item:any, index) =>{
              return(
                <div key={index} className={styles.wpAppsv01_item}>
                  <div className={styles.wpAppsv01_circle}> 
                    <Icon iconName={item.iconName} />
                  </div>
                  <div className={styles.wpAppsv01_text}> {item.name}</div>
                </div>
              )
            })
            : ''
          }
        </div>
      </section>
    );
  }
}
