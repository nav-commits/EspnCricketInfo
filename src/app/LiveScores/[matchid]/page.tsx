'use client';
import React, { useState, useEffect } from 'react';
import Card from '@/app/Components/Molecules/Card';
import Tabs from '@/app/Components/Molecules/Tabs';
import { useRouter, useParams } from 'next/navigation';
import { tabDataMatch } from '@/app/Utils/Data';
import Image from 'next/image';
import styles from '../[matchid]/MatchPage.module.scss';
import NavBarContent from '@/app/Components/Organisms/NavBarContent/NavBarContent';

interface MatchProps {
    searchParams: any;
}
const Match: React.FC<MatchProps> = ({ searchParams }) => {
    const { matchid } = useParams();
    console.log(matchid);
    console.log(searchParams.name);
    console.log(searchParams.description);
    console.log(searchParams.flag);

    return (
        <>
            <NavBarContent />
            <div className={styles['center__container']}>
                <Card
                    showContentTop={
                        <>
                            <div style={{ borderBottom: '1px solid rgb(237, 238, 240)' }}>
                                <div>
                                    <div>
                                        <p className={styles['grid-item--header']}>
                                            {searchParams.name}
                                        </p>
                                        <p className={styles['grid-item--description']}>
                                            {searchParams.description}
                                        </p>
                                    </div>
                                    <div className={styles['team-container']}>
                                        <div className={styles['team-container--inner']}>
                                            <Image
                                                src={searchParams.flag}
                                                alt={'Team Flag'}
                                                width={40}
                                                height={40}
                                                style={{
                                                    marginRight: '8px',
                                                }}
                                            />

                                            <p className={styles['team-container--name']}>
                                                {searchParams.team1}
                                            </p>
                                        </div>
                                        <p>{searchParams.score1}</p>
                                    </div>

                                    <div className={styles['team-container']}>
                                        <div className={styles['team-container--inner']}>
                                            <Image
                                                src={searchParams.flag2}
                                                alt={'Team Flag Two'}
                                                width={40}
                                                height={40}
                                                style={{
                                                    marginRight: '8px',
                                                }}
                                            />

                                            <p className={styles['team-container--name']}>
                                                {searchParams.team2}
                                            </p>
                                        </div>
                                        <p>{searchParams.score2}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={styles['grid-item--match-day']}>
                                        {searchParams.day}
                                    </p>
                                    <p className={styles['grid-item--content']}>
                                        {searchParams.additionalContent}
                                    </p>
                                </div>
                            </div>
                        </>
                    }
                    tabs={
                        <div>
                            <Tabs
                                tabs={tabDataMatch}
                                onTabSelect={() => console.log('tab selected')}
                                paddingTop='10px'
                                paddingLeft='2px'
                                paddingBottom='5px'
                                gap='10px'
                            />
                        </div>
                    }
                />
                <Card
                    paddingBottom='10px'
                    showContentBelow={
                        <p>
                            That's it from the second day of the only Test between these two sides.
                            A lot of action is due to come from the Tolerance Oval, though, so catch
                            us for play on the third morning. Until then, it is good night and
                            goodbye from Ekanth, Vairavan, and me, Himanshu! DaWolf: "Did Ireland
                            miss a trick by not bringing back Adair for a few more overs this
                            evening?" --- Fair point, but the ball was turning, and McBrine looked
                            in good touch. Even McCarthy was getting good bounce from the other end
                            Sam: "Why do I have a horrible feeling that Ireland will struggle to
                            chase anything over about 170?" --- Probably because you've seen the
                            ball turn, and also how well Afghanistan's spinners bowled in the first
                            innings Hashmatullah Shahidi: "When I went in, our main guys had fallen.
                            There was pressure, but I kept it simple. As a captain you have to lead
                            from the front. Gurbaz is a class player, and he has a lot of shots. I
                            just told him to keep it simple, and that 'if you play the defensive
                            shots well, they will give the loose ball'. Tomorrow is a big day for
                            us. We have to try to win the first session. I will try my best to do
                            something for the team. It is windy, and conditions aren't easy for
                            batting. If we win the first session tomorrow, the game will be on. We
                            have our main batsmen waiting for their turn. The important thing is how
                            Gurbaz and I start tomorrow." 5.32pm The day, which seems to have
                            started yesterday, ends with nine wickets falling to 14 on day one.
                            Ireland had started 55 behind on first innings with six wickets in hand,
                            and end 26 behind on second. Afghanistan are technically 26 for 3 after
                            they wiped out the 108-run deficit led by their captain Shahidi's
                            unbeaten 53. Debutant Gurbaz has looked solid too at the other end, and
                            Ireland will hope they strike on the fourth morning before it gets too
                            late.
                        </p>
                    }
                />
            </div>
        </>
    );
};

export default Match;
