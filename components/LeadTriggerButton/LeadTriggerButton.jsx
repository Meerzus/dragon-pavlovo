'use client'

import React, {useEffect, useState} from 'react';
import LeadForm from "@/components/LeadForm/LeadForm";

import './LeadTriggerButton.sass'

function LeadTriggerButton({text}) {
    const [isForm, setIsForm] = useState(false)

    return (
        <button>
            <LeadForm isForm={isForm} setIsForm={setIsForm}/>
            {text}
        </button>
    );
}

export default LeadTriggerButton;