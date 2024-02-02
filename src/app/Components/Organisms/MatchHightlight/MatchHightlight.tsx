import Image from 'next/image';
import { MatchHighlightProps } from './MatchHightlight.types';
import styles from './MatchHightlight.module.scss';

const MatchHighlight: React.FC<MatchHighlightProps> = ({ src, alt, title, description, view }) => (
    <div style={view}>
        <Image src={src} alt={alt} width={420} height={250} style={{ borderRadius: '10px' }} />

        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
);

export default MatchHighlight;
