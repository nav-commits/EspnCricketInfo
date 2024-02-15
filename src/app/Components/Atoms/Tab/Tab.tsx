import React from 'react';
import { TabProps } from './Tab.types';
import styles from './Tab.module.scss';

const Tab: React.FC<TabProps> = ({
    index,
    label,
    activeTab,
    onClick,
    content,
    paddingRight,
    paddingLeft,
    paddingTop,
    paddingBottom,
}) => {
    return (
        <div
            style={{
                borderBottom: activeTab === index ? '3px solid #03a9f4' : 'none',
            }}
            className={styles.tab__content}
            onClick={() => onClick(index)}
        >
            {label && (
                <div
                    style={{
                        paddingLeft: paddingLeft,
                        paddingRight: paddingRight,
                        paddingTop: paddingTop,
                        paddingBottom: paddingBottom,
                    }}
                    className={`${activeTab === index ? styles['tab__content--label'] : ''}`}
                >
                    {label}
                </div>
            )}
            {content && <div className={styles['tab__content--content']}>{content}</div>}
        </div>
    );
};

export default Tab;
