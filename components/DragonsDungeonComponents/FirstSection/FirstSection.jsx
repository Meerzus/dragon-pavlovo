import React from 'react';

import './FirstSection.sass'
import Image from "next/image";

import logo from '@/public/images/logo.png'
import Link from "next/link";

function FirstSection(props) {
    return (
        <section id={'first-section'}>
            <h1>Добро пожаловать в <span id={'dragon'}>Подземелье Дракона</span> в городе Павлово!</h1>

            <h5>Исследуйте таинственные лабиринты, встречайтесь с настоящими животными и наслаждайтесь захватывающими
                развлекательными шоу. <span id={'dragon'}>Для всех праздников и семейных
                событий!</span></h5>

            <Image src={logo} alt={'Подземелье Дракона'} width={640} height={480}/>

            <Link href={'tel:+79101448287'}><h4>Связаться с нами</h4></Link>
        </section>
    );
}

export default FirstSection;