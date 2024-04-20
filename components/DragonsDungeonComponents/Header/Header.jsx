import React from 'react';
import Image from "next/image";

import './Header.sass'

import logo from '@/public/images/logo.png'
import Link from "next/link";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function Header(props) {
    return (
        <header>
            <Image src={logo} alt={'Подземелье Дракона'} width={100} height={50}/>

            <nav>
                <Link href={'#events'}>Мероприятия</Link>
                <Link href={'#about-us'}>О нас</Link>
                <Link href={'#chooseUsSection'}>Возраст</Link>
                <Link href={'#program'}>Программа</Link>
                <Link href={'#contacts'}>Контакты</Link>
            </nav>

            <LeadTriggerButton text={'Перезвоните мне'}/>
        </header>
    );
}

export default Header;