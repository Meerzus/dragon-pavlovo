'use client'

import React, {useEffect, useState} from 'react';
import LeadForm from "@/components/LeadForm/LeadForm";

import './LeadTriggerButton.sass'
import Image from "next/image";

import phone from '@/public/images/dragons-dungeon/svg/Phone.svg'

function LeadTriggerButton({text}) {
    return text === 'расчитать стоимость' ? (
        <button onClick={() => {
            document.getElementById('calculateLeadForm').classList.add('leadForm-active')
        }}>
            {text}
        </button>
    ) : (
        <button onClick={() => {
            document.getElementById('leadForm').classList.add('leadForm-active')
        }} id={'call-btn'}>
            {window.innerWidth > 1200 && text}
            {
                window.innerWidth <= 1200 &&
                <Image alt={'Позвонить'} src={phone} width={48} height={48}/>
            }
        </button>
    );
}

export default LeadTriggerButton;