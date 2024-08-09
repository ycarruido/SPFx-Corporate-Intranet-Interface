import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './WpHeaderv01.module.scss';
import type { IWpHeaderv01Props } from './IWpHeaderv01Props';
import { escape } from '@microsoft/sp-lodash-subset';

const Headerv01 = (props: IWpHeaderv01Props) => {
  const { text01 = 'Text 1', text02 = 'Text 2', text03 = 'Text 3', subtitle01 = 'Subtitle 1', subtitle02 = 'Subtitle 2', subtitle03 = 'Subtitle 3' } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    { text: text01, subtitle: subtitle01 },
    { text: text02, subtitle: subtitle02 },
    { text: text03, subtitle: subtitle03 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className={styles.headerv01}>
      <div className={styles.wpheaderv01Top}>
        <div  className={styles.textContainer}>
          <div className={styles.messageContainer}>
                {
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`${styles.message} ${index === currentIndex ? styles.active : ''}`}
                    >
                      <ul>
                        <li>{message.text}</li>
                        <li className={styles.listElement}>
                          <div className={styles.wpheaderv01_SubTitle}>
                            {escape(message.subtitle)}
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))
                }
          </div>
        </div>
        <div className={styles.rightContent}>
          {/* Aquí puedes agregar cualquier contenido adicional, como una imagen */}
        </div>
      </div>
      {/* <div className={styles.wpheaderv01Bottom}></div> */}
    </div>
  );
}

export default Headerv01;
