import React from 'react';

import './FifthSection.sass'
import Image from "next/image";

import image from '@/public/images/dragons-dungeon/image.png'

import labirint from '@/public/images/dragons-dungeon/labirint.jpg'
import disco from '@/public/images/dragons-dungeon/disco.jpg'
import game_show from '@/public/images/dragons-dungeon/game_show.jpg'
import music from '@/public/images/dragons-dungeon/music.jpg'
import animals from '@/public/images/dragons-dungeon/animals.jpg'
import silver_show from '@/public/images/dragons-dungeon/silver_show.jpg'

import Video from "@/components/DragonsDungeonComponents/FifthSection/Video";
import Link from "next/link";

function FifthSection(props) {
    return (
        <section id={'program'}>
            <h1>Что вас ждет в Подземелье Дракона</h1>

            <div className="item">
                <Image src={animals} alt={''} width={640} height={480}/>

                <div className="container">
                    <h4>
                        <span id="dragon">Испытания с животными</span>
                    </h4>

                    <p>
                        Добро пожаловать в Подземелье Дракона, где каждое испытание становится настоящим
                        приключением! Уникальные встречи с животными превратят ваше мероприятие в захватывающий
                        зоопарк под открытым небом. Ваши маленькие герои смогут познакомиться с настоящими
                        обитателями нашего мира и принять участие в увлекательных взаимодействиях с ними.
                    </p>
                </div>
            </div>

            <div className="item">
                <Image src={labirint} alt={''} width={640} height={480}/>

                <div className="container">
                    <h4>
                        <span id="dragon">Лабиринты и задания с габаритным инвентарем</span>
                    </h4>

                    <p>
                        Подготовьтесь к неожиданным поворотам и захватывающим испытаниям в лабиринтах Подземелья
                        Дракона! Увлекательные задания, сопровождаемые габаритным инвентарем, окунут вас в мир
                        загадок и приключений, где каждое решение приводит к новым открытиям и незабываемым
                        впечатлениям.
                    </p>
                </div>
            </div>

            <div className="item">
                <Image src={music} alt={''} width={640} height={480}/>

                <div className="container">
                    <h4>
                        <span id="dragon">Музыкальное сопровождение и световые эффекты</span>
                    </h4>

                    <p>
                        Поддайтесь ритму и атмосфере музыки в Подземелье Дракона! Наши музыкальные композиции и
                        световые эффекты создадут уникальную атмосферу загадки и волшебства, добавляя драматизма и
                        веселья к каждому вашему шагу.
                    </p>
                </div>
            </div>

            <div className="item">
                <Image src={game_show} alt={''} width={640} height={480}/>

                <div className="container">
                    <h4>
                        <span id="dragon">Развлекательная игра-шоу</span>
                    </h4>

                    <p>
                        Готовьтесь к захватывающему развлекательному шоу, которое оставит вас с горящими глазами и
                        улыбкой на лице! Наши артисты и ведущие подарят вам яркие и незабываемые моменты, наполненные
                        весельем и радостью.
                    </p>
                </div>
            </div>

            <div className="item">
                <Image src={disco} alt={''} width={640} height={480}/>

                <div className="container">
                    <h4>
                        <span id="dragon">Дискотека с DJ и ведущими</span>
                    </h4>

                    <p>
                        Завершите ваше приключение в Подземелье Дракона яркой дискотекой под ритмы DJ и ведущих!
                        Отрывайтесь по полной программе, делитесь эмоциями с друзьями и создавайте яркие воспоминания,
                        которые останутся с вами надолго после окончания мероприятия.
                    </p>
                </div>
            </div>

            <div className="item">
                <Image src={silver_show} alt={''} width={640} height={480}/>

                <div className="container">
                    <h4>
                        <span id="dragon">Серебряное шоу</span>
                    </h4>

                    <p>
                        Дополните вашу вечеринку ярким и захватывающим "Серебряным шоу"! Незабываемые эффекты,
                        удивительные трюки и потрясающая атмосфера сделают ваше мероприятие еще более
                        запоминающимся и веселым!
                    </p>
                </div>
            </div>

            <div className="video-section">
                <h2>Еще остались сомнения?</h2>
                <h2><span id="dragon">Посмотрите видео и убедитесь</span></h2>

                <Video width={'100%'} height={'100%'}/>

                <h4>Больше материала у нас в <Link href={'https://vk.com/dragon_pavlovo'}
                                                   target={'_blank'}
                >социальных сетях</Link></h4>
            </div>
        </section>
    );
}

export default FifthSection;