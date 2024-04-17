import React from 'react';

import './ThirdSection.sass'

import image from '@/public/images/dragons-dungeon/third-section.jpg'
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function ThirdSection(props) {
    return (
        <section id={'about-us'}>
            <Image src={image} alt={''} width={1080} height={720}/>

            <div className="container">
                <h1><span id="dragon">О нас</span></h1>

                <p>
                    <span id="dragon">Мы - команда Подземелья Дракона! </span> С момента нашего основания мы
                    превратились в ведущих провайдеров волшебных мероприятий в <span id="dragon"> г. Павлово </span> и
                    широко известны своими уникальными и захватывающими шоу.
                </p>

                <p>
                    Наш опыт в организации подобных мероприятий <span id="dragon"> не имеет границ! </span> Мы работаем
                    с любыми возрастными группами и типами событий, от дней рождений до корпоративных мероприятий,
                    придавая каждому событию неповторимую атмосферу <span id="dragon"> веселья и волшебства.</span>
                </p>

                <p>
                    Наши ведущие и аниматоры - настоящие <span id="dragon"> профессионалы своего дела</span>, чья цель -
                    создать для вас и ваших гостей незабываемый опыт. Мы гордимся своим коллективом талантливых
                    артистов и аниматоров, которые с легкостью погрузят вас в мир
                    <span id="dragon"> фантазии и приключений.</span>
                </p>

                <p>
                    Вы готовы отправиться в захватывающее приключение, полное загадок и веселья? Тогда скорее следуй за
                    нами в <span id="dragon"> Подземелье Дракона!</span>
                </p>

                <LeadTriggerButton text={'подарите себе незабываемый праздник'}/>
            </div>
        </section>
    );
}

export default ThirdSection;