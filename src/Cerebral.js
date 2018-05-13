import React from 'react'
import { Controller, Module } from "cerebral"
import DevTools from 'cerebral/devtools'
import { Container } from '@cerebral/react'
import modules from "./modules"

const isChrome = navigator.userAgent.toLowerCase().includes("chrome")

const laptop = "192.168.1.27";
const local = "localhost";

const config = { 
    devtools: isChrome ? DevTools({host: local + ":8686"}) : null
}

// Since cerebral can't select the root state I am wrapping all in an app Module
const app = Module({modules})
const masterModule = Module({modules: { app }})

const controller = Controller(masterModule, config)

const Cerebral = ({children}) => <Container controller={controller}>{children}</Container>

export default Cerebral