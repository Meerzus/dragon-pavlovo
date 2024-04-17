import React from 'react';

import './ThirdSection.sass'

import image from '@/public/images/dragons-dungeon/third-section.jpg'
import Image from "next/image";

function ThirdSection(props) {
    return (
        <section id={'about-us'}>
            <Image src={image} alt={''} width={1080} height={720}/>

            <div className="container">
                <h1><span id="dragon">О нас</span></h1>

                <p>
                    Вы готовы отправиться в захватывающее приключение, полное загадок и веселья?
                    <span id="dragon">Подземелье Дракона </span> - это уникальное игра-шоу, которое подходит для любого
                    праздника или мероприятия, будь то день рождения, выпускной, семейное событие или профессиональный
                    праздник. Мы создали эту программу для того, чтобы каждый участник мог окунуться в увлекательный
                    мир фантазии и приключений.
                </p>

                <p>
                    Ваш текст
                </p>

                <p>
                    Ваш текст
                </p>
            </div>
        </section>
    );
}

export default ThirdSection;