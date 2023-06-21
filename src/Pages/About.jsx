import React from 'react';
import Header from './Header';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div className="px-6 md:px-20 lg:px-56 mt-10">
                <h1 className="text-3xl font-bold mb-4">History of English Premier League</h1>
                <p className="text-lg">
                    The Premier League (legal name: The Football Association Premier League Limited) is the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons typically run from August to May with each team playing 38 matches against all other teams both home and away.
                </p>
                <p className="text-lg">
                    The competition was founded as the FA Premier League on 20 February 1992 following the decision of First Division (top-tier league from 1888 until 1992) clubs to break away from the English Football League. However, teams may still be relegated into and promoted from the EFL Championship.
                </p>
                <p className="text-lg">
                    The Premier League takes advantage of a lucrative television rights sale to Sky. From 2019 to 2020, accumulated television rights were worth around £3.1 billion a year, with Sky and BT Group securing the domestic rights to broadcast 128 and 32 games respectively. The Premier League is a corporation where chief executive Richard Masters is responsible for its management, with member clubs acting as shareholders.
                </p>
                <p className="text-lg">
                    The Premier League is the most-watched sports league in the world, broadcast in 212 territories to 643 million homes and a potential TV audience of 4.7 billion people. For the 2018–19 season, the average Premier League match attendance was at 38,181, second to the German Bundesliga's 43,500, while aggregated attendance across all matches was the highest of any association football league at 14,508,981, and most stadium occupancies are near capacity.
                </p>
                <p className="text-lg">
                    As of 2023, the Premier League is ranked first in the UEFA coefficient rankings based on performances in European competitions over the past five seasons, ahead of Spain's La Liga. Combined with the old First Division, the English top-flight has produced the second-highest number of European Cup / UEFA Champions League titles, with a record six English clubs having won fifteen European championships in total.
                </p>
                <p className="text-lg">
                    Fifty-one clubs have competed since the inception of the Premier League in 1992: forty-nine English and two Welsh clubs. Seven of them have won the title: Manchester United (13), Manchester City (7), Chelsea (5), Arsenal (3), Blackburn Rovers (1), Leicester City (1) and Liverpool (1). Only six clubs have avoided relegation since its inception: Arsenal, Chelsea, Everton, Liverpool, Manchester United and Tottenham.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default About;
