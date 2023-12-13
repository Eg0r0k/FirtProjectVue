<template lang="">
    <nav class="header__nav nav" >
        <CommonBtn class="nav__burger" @click="openNav">
            <Menu/>
           </CommonBtn>
           <Transition name="slide-fade">
        <ul class="nav__menu"  v-if="show" >
            <NavItem v-for="item in navItems" :key="item.id">
              <a :href="`#${item.link}`"> {{item.text}}</a>
            </NavItem>
        </ul>
    </Transition>
       <CommonBtn class="nav__cart">
        <Cart/>
       </CommonBtn>
      </nav>

</template>
<script >
import { ref, reactive, watch } from 'vue';

import Cart from './icons/Cart.vue';
import CommonBtn from './CommonBtn.vue';
import Menu from './icons/Menu.vue'
import NavItem from './NavItem.vue';
export default {
    name: "TheNav",
    components:
    {
        Cart,
        CommonBtn,
        Menu,
        NavItem
    },
    methods:
    {
        openNav()
      {
    
        this.show ? this.show=false:this.show=true;
        
      }
     
    },
    setup() {
        const show = ref(false);
        const userWindowWidth = reactive({ width: window.innerWidth });

        const showNav = () => {
            show.value = userWindowWidth.width > 450;

        };

        watch(userWindowWidth, showNav);

        const handleResize = () => {
            userWindowWidth.width = window.innerWidth;
        };
        
        window.addEventListener('resize', handleResize);
        showNav(); 

        const navItems = [
            {id:1,text:"Репродукции",link:"reproduction"},
            {id:2,text:"Новинки",link:"new"},
            {id:3,text:"О нас",link:"about"}
        ]
        return {
            show,navItems
        };
    }
}
</script>
<style  scoped>
.nav {
    display: flex;
    position: relative;

}

.nav__cart {
    aspect-ratio: 1/1;

}

.nav__burger {
    display: none;
}



.nav__menu {
    display: flex;
    gap: 60px;
    margin-right: 60px;
}

.nav__list a {
    color: var(--black);
    font-weight: 500;

}

.slide-fade-enter-active {
    transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);

    opacity: 0;
}

@media screen and (max-width:450px) {
    .nav__menu {
        position: absolute;
        display: flex;
        top: 100%;
        flex-direction: column;
        padding: 15px 15px;
        left: 0px;
        right: -5px;
        background-color: var(--ligth-green);
       z-index: 100;
       height: 100vh;
    }

    .nav__burger {
        display: inline-block;
    }
}

@media screen and (max-width:656px) {

    .nav::before {
        content: "";
        display: block;
        position: absolute;
        background-color: #C3D1C6;
        height: 1px;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
    }

    .nav {
        width: 100%;
        padding: 17px 15px;
        background-color: var(--ligth-green);
    }

    .nav__cart {
        margin-left: auto;
    }

    .nav__menu {
        
        margin-right: 5px !important;
    }
}
</style>