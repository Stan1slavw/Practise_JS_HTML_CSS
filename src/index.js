import {model} from './model'
// import {templates} from "./templates";
import './styles/main.css'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'

const site = new Site('#site')

site.render(model);

const sidebar = new Sidebar('#panel')