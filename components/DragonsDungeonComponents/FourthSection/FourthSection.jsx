import React from 'react';

import './FourthSection.sass'
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";
import Image from "next/image";

import image from '@/public/images/dragons-dungeon/image.png'
import kids from '@/public/images/dragons-dungeon/7yo.jpg'
import teenagers from '@/public/images/dragons-dungeon/14yo.jpg'
import adults from '@/public/images/dragons-dungeon/100yo.jpg'

function FourthSection(props) {
    return (
        <section id={'ages'}>
            <h1>Праздник для всех возрастов!</h1>

            <h4>Для кого подойдет Подземелье Дракона?</h4>

            <div className="item">
                <h5>Для детей от 7 лет</h5>

                <Image src={kids} alt={'Для детей от 7 лет'} width={1080} height={720}/>

                <p>
                    Подземелье Дракона - это место, где каждый ребенок от 7 лет и старше может окунуться в мир
                    волшебства и приключений. Наши игры и шоу созданы специально для максимального веселья и
                    безопасности детей. Здесь они смогут прожить захватывающие моменты вместе с друзьями и семьей,
                    запоминая эти встречи на всю жизнь.
                </p>

                <LeadTriggerButton text={'заказать мероприятие'}/>
            </div>

            <div className="item">
                <h5>Для подростков</h5>

                <Image src={teenagers} alt={'Для детей от 7 лет'} width={1080} height={720}/>

                <p>
                    В Подземелье Дракона каждый подросток найдет свою долю приключений и адреналина. Наши
                    интерактивные игры и захватывающие мероприятия предоставляют возможность окунуться в мир
                    фантазии и открытий. Подростки могут испытать себя, участвуя в наших заданиях и развлекательных
                    шоу, создавая незабываемые воспоминания.
                </p>

                <LeadTriggerButton text={'заказать мероприятие'}/>
            </div>

            <div className="item">
                <h5>Для взрослых</h5>

                <Image src={adults} alt={'Для детей от 7 лет'} width={1080} height={720}/>

                <p>
                    Подземелье Дракона - это не только место для детского веселья, но и для взрослых приключений.
                    Наши мероприятия подходят для всех возрастов, обеспечивая веселое и увлекательное
                    времяпрепровождение для всех. Взрослые могут насладиться играми, шоу и различными
                    активностями, создавая незабываемые воспоминания в компании друзей и коллег.
                </p>

                <LeadTriggerButton text={'заказать мероприятие'}/>
            </div>
        </section>
    );
}

export default FourthSection;