import React from 'react';

import './ChooseUsSection.sass'

import idea from '@/public/images/dragons-dungeon/svg/idea.svg'
import format from '@/public/images/dragons-dungeon/svg/format.svg'
import happy from '@/public/images/dragons-dungeon/svg/happy.svg'
import baby from '@/public/images/dragons-dungeon/svg/baby.svg'
import balloons from '@/public/images/dragons-dungeon/svg/balloons.svg'
import guard from '@/public/images/dragons-dungeon/svg/guard.svg'
import Image from "next/image";

const data = [
    {
        id: 1,
        title: 'Уникальный формат',
        text: 'Мы предлагаем уникальный формат мероприятия, которого нет нигде в городе. "Подземелье Дракона" — это не просто развлечение, это настоящее приключение!',
        icon: idea,
    },
    {
        id: 2,
        title: 'Специальная программа',
        text: 'Наши мероприятия направлены на сплочение и объединение коллектива. Мы создаем особую атмосферу, где каждый участник чувствует себя частью команды.',
        icon: format,
    },
    {
        id: 3,
        title: 'не дадим заскучать',
        text: 'Мы гарантируем, что наши мероприятия займут и развлекут абсолютно всех участников. Независимо от возраста, у нас найдется что-то интересное для каждого.',
        icon: happy,
    },
    {
        id: 4,
        title: 'Для всех возрастов',
        text: '"Подземелье Дракона" подходит как для взрослых, так и для детей. Наша профессиональная команда разработает уникальный сценарий, который подойдет именно для вашей группы, учитывая возраст всех участников.',
        icon: baby,
    },
    {
        id: 5,
        title: 'Банкетная зона',
        text: 'Мы предлагаем уютную банкетную зону с вместимостью до 30 человек, где вы сможете отдохнуть и насладиться приятным общением после приключений.',
        icon: balloons,
    },
    {
        id: 6,
        title: 'Качество и безопасность',
        text: 'В "Подземелье Дракона" мы гарантируем высокое качество проведения мероприятий и вашу безопасность. Мы работаем для того, чтобы вы ушли с нами только с положительными эмоциями и впечатлениями!',
        icon: guard,
    },
]

function ChooseUsSection(props) {
    return (
        <section id={'chooseUsSection'}>
            <h1>Почему выбрать стоит <span id="dragon">именно нас</span></h1>

            <div className="container">
                {
                    data.map(item => {
                        return <div key={item.id} className={'item'}>
                            <h4>{item.title}</h4>
                            <Image src={item.icon} alt={item.title}/>
                            <p>{item.text}</p>
                        </div>
                    })
                }
            </div>
        </section>
    );
}

export default ChooseUsSection;