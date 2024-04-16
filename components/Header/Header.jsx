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
                <Link href={'/'}>О нас</Link>
                <Link href={'/'}>Поводы</Link>
                <Link href={'/'}>Контакты</Link>
            </nav>

            <LeadTriggerButton text={'Оставить заявку'}/>
        </header>
    );
}

export default Header;