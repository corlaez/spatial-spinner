import React from 'react';
import { Controller, Module } from "cerebral";
import DevTools from 'cerebral/devtools';
import { Container } from '@cerebral/react'
import modules from "./modules"

const isChrome = navigator.userAgent.toLowerCase().includes("chrome")

const config = { 
    devtools: isChrome ? DevTools({host: "192.168.1.27:8686"}) : null
}

const controller = Controller(Module({modules}), config)

const Cerebral = ({children}) => <Container controller={controller}>{children}</Container>

export default Cerebral;