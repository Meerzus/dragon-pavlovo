'use client'

import React, {useEffect, useState} from 'react';
import LeadForm from "@/components/LeadForm/LeadForm";

import './LeadTriggerButton.sass'

function LeadTriggerButton({text}) {
    return (
        <button onClick={() => {
            document.getElementById('leadForm').classList.add('leadForm-active')
        }}>
            {text}
        </button>
    );
}

export default LeadTriggerButton;