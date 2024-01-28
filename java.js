const menuItem = document.querySelectorAll('.menu-item');
const popup = document.querySelector('.notifications-popup')
const messagesnotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const themeCust = document.querySelector('.customize-theme');
const btnTheme = document.querySelector('#theme');
let fontSize = document.querySelectorAll('.choose-size span');
const chooseColor = document.querySelectorAll('.choose-color span')
let Bg1 = document.querySelector('.bg-1')
let Bg2 = document.querySelector('.bg-2')
let Bg3 = document.querySelector('.bg-3')
var root = document.querySelector(':root');

function remove(){
        menuItem.forEach(item => {
                item.classList.remove('active');
        })       
}

menuItem.forEach(item => {
        item.addEventListener('click', () => {
                remove();
                item.classList.add('active');
                
        })
})

function search(){
        const message = document.querySelectorAll('.message');
        let messageSearch = document.querySelector('#message-search').value.toUpperCase();
        const name = document.getElementsByTagName('h5');

        for (i = 0 ; i<name.length ; i++){
                if(name[i].innerHTML.toUpperCase().indexOf(messageSearch)){
                        message[i].style.display = 'none';
                } else{
                        message[i].style.display = '';
                }
        }
}

function pop(){
        popup.classList.toggle('close-notifications-popup');
}

messagesnotification.addEventListener('click', () => {
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        messagesnotification.querySelector('.notification-count').style.display = 'none';
        setTimeout(() => {
                messages.style.boxShadow = 'none';
        }, 2000)
})

const openThemeModal = () => {
        themeCust.style.display = 'grid';
}

const closeThemeModel = (e) => {
        if(e.target.classList.contains('customize-theme')){
                themeCust.style.display = 'none';
        }
}

themeCust.addEventListener('click', closeThemeModel)
btnTheme.addEventListener('click', openThemeModal);

const removeSize = () => {
        fontSize.forEach(size => {
                size.classList.remove('active')
        })
}

fontSize.forEach(size => {
        size.addEventListener('click', () => {
                removeSize();
                size.classList.add('active');
                let font = document.querySelector('.ht');
                if(size.classList.contains('font-size-1')){
                        font.style.fontSize = '10px';
                        root.style.setProperty('---sticky-top-left', '5.4rem');
                        root.style.setProperty('---sticky-top-right', '5.4rem');
                } else if(size.classList.contains('font-size-2')){
                        font.style.fontSize = '13px';
                        root.style.setProperty('---sticky-top-left', '5.4rem');
                        root.style.setProperty('---sticky-top-right', '-7rem');
                } else if(size.classList.contains('font-size-3')){
                        font.style.fontSize = '16px';
                        root.style.setProperty('---sticky-top-left', '-2rem');
                        root.style.setProperty('---sticky-top-right', '-17rem');
                } else if(size.classList.contains('font-size-4')){
                        font.style.fontSize = '19px';
                        root.style.setProperty('---sticky-top-left', '-5rem');
                        root.style.setProperty('---sticky-top-right', '-25rem');
                } else if(size.classList.contains('font-size-5')){
                        font.style.fontSize = '22px';
                        root.style.setProperty('---sticky-top-left', '-12rem');
                        root.style.setProperty('---sticky-top-right', '-35rem');
                }
        })
        //document.getElementsByTagName('html').style.fontSize = font;
})

const removeSelectColor = () => {
        chooseColor.forEach(colorPicker => {
                colorPicker.classList.remove('active');
        })
}

chooseColor.forEach(color => {
        color.addEventListener('click', () => {
                removeSelectColor();
                color.classList.toggle('active');
                let primary;
                if(color.classList.contains('color-1')){
                        primaryhue = 252;
                } else if(color.classList.contains('color-2')){
                        primaryhue = 52;
                } else if(color.classList.contains('color-3')){
                        primaryhue = 352;
                } else if(color.classList.contains('color-4')){
                        primaryhue = 152;
                } else if(color.classList.contains('color-5')){
                        primaryhue = 202;
                }
                root.style.setProperty('--primary-color-hue', primaryhue)
        })
})

let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

const changeBackGround = () => {
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--light-color-lightness', lightColorLightness);
}

Bg1.addEventListener('click', () => {
        Bg1.classList.add('active');
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        window.location.reload();

})

Bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        lightColorLightness = '15%';
        whiteColorLightness = '20%';
        changeBackGround(); 
        document.querySelector('.ht').style.color = 'white';
        Bg2.classList.add('active')    
        Bg1.classList.remove('active')    
        Bg3.classList.remove('active')    
})

Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';
        document.querySelector('.ht').style.color = 'white';
        changeBackGround();
})
