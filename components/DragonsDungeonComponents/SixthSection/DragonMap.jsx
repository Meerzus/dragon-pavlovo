'use client'

import React from 'react';
import {Map, Placemark, YMaps, ZoomControl} from "@pbe/react-yandex-maps";

function DragonMap(props) {
    return (
        <YMaps>
            <Map
                width={500}
                height={500}
                defaultState={{
                    center: [55.965375, 43.065908],
                    zoom: 17,
                }}
            >
                <Placemark geometry={[55.965375, 43.065908]} />
                <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>
    );
}

export default DragonMap;