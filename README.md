# ESPN Cricinfo Inspired Components

This project contains reusable UI components inspired by the ESPN Cricinfo cricket website. These components are built using Next.js and TypeScript, styled with SCSS/SASS. 

## Components

The project includes the following components:

- **Button:** Customizable buttons for various purposes.
- **Card:** Cards for displaying cricket match information, news, etc.
- **Tabs:** Tabs for navigation between different sections.
- **NavigationBar:** A responsive navigation bar for site navigation.

Other components may be added as the project evolves.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nav-commits/EspnCricketInfo.git

1. Install dependencies:
npm install or yarn install

2. Run the development server:
npm run dev or yarn dev

Open http://localhost:3000 with your browser to see the result.

## Usage

Each component is modular and can be imported individually. Here's an example of how to use the Button component:

```tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
    return (
        <div className={styles.custom__button}>
            <div className={styles['button__inner--container']}>
                <a className={styles.button__content} href='/'>
                    {text}
                </a>
                {icon && icon}
            </div>
        </div>
    );
};

export default Button;


