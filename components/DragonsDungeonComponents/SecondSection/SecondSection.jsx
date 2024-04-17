import React from 'react';

import './SecondSection.sass'
import ProductCard from "@/components/DragonsDungeonComponents/SecondSection/ProductCard";

import image from '@/public/images/dragons-dungeon/image.png'
import ProductBackground from "@/components/DragonsDungeonComponents/SecondSection/ProductBackground";

const products = [
    {
        id: 1,
        title: 'Дни рождения',
        image: image,
        description: 'Празднуйте день рождения вашего ребенка в увлекательном Подземелье Дракона! Настоящие приключения, волшебные сюрпризы и незабываемые моменты ждут маленьких гостей и их друзей. Веселье и радость гарантированы!'
    },
    {
        id: 2,
        title: 'Выпускные',
        image: image,
        description: 'Завершите школьный год в эпическом стиле с Подземельем Дракона! Ваш класс сможет окунуться в захватывающее путешествие, испытания и приключения, которые помогут создать незабываемые воспоминания перед переходом к новому этапу жизни.'
    },
    {
        id: 3,
        title: 'Праздники',
        image: image,
        description: 'Празднуйте любой праздник вместе с нами! Подземелье Дракона создаст волшебную атмосферу и удивит вас яркими шоу, интерактивными играми и незабываемыми моментами. Подарите себе и вашим близким незабываемое приключение!'
    },
    {
        id: 4,
        title: 'Корпоративы',
        image: image,
        description: 'Устроим незабываемый корпоратив в Подземелье Дракона! Это идеальное место для командного духа, объединения коллектива и создания ярких впечатлений. Разнообразные игры, интересные задания и веселая атмосфера подарят вам отличный отдых и новые впечатления!'
    },
    {
        id: 5,
        title: 'Вечеринки',
        image: image,
        description: 'Проведите незабываемую вечеринку в Подземелье Дракона! Это идеальное место для взрослых, желающих оторваться по-настоящему. Вас ждут увлекательные игры, шоу, дискотека с DJ и ведущими, а также множество развлекательных мероприятий для создания незабываемого вечера!'
    },
]

// дни рождения, выпускные, праздники, корпоративы

function SecondSection(props) {
    return (
        <section id={'second-section'}>
            <ProductBackground/>
            <h3>Перечень мероприятий, для которых подходит <span id="dragon">Подземелье Дракона</span></h3>

            <ProductCard product={products[0]}/>
            <ProductCard product={products[1]}/>
            <ProductCard product={products[2]}/>
            <ProductCard product={products[3]}/>
            <ProductCard product={products[4]}/>
        </section>
    );
}

export default SecondSection;