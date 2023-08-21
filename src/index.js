import {model} from './model'
// import {templates} from "./templates";
import './styles/main.css'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import {Block} from "./classes/blocks";

const site = new Site('#site')

site.render(model);

new Sidebar('#panel', newBlock => {
    model.push(newBlock)
    site.render(model);
})