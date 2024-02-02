import Image from 'next/image';
import { MatchHighlightProps } from './MatchHightlight.types';
import styles from './MatchHightlight.module.scss';

const MatchHighlight: React.FC<MatchHighlightProps> = ({
    src,
    alt,
    title,
    description,
    view,
    imageVideoIcon,
    isDesktop,
}) => (
    <div style={view} className={styles.match__container}>
        <Image
            src={src}
            alt={alt}
            width={isDesktop ? 420 : 310}
            height={isDesktop ? 250 : 200}
            style={{ borderRadius: '10px' }}
        />
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={styles['match__container--icon']}>{imageVideoIcon}</div>
    </div>
);

export default MatchHighlight;
