import {model} from './model'
// import {templates} from "./templates";
import './styles/main.css'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import {Block} from "./classes/blocks";
import {App} from './classes/app'

new App(model).init()
