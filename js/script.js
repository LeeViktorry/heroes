const database = [
    {
        id:1,
        name:'Серкан Болат',
        sphere:'Возлюбленный Эды',
        image:'https://i.pinimg.com/originals/b8/fb/8a/b8fb8a010d9d56c0b8ea732c3258548f.jpg'
    },
    {
        id:2,
        name:'Эда Йылдыз',
        sphere:'Возлюбленная Серкана',
        image:'https://kinoturkey.ru/uploads/posts/2020-07/1595941570_c08yd1bxjb8-kopiya.jpg'
    },
    {
        id:3,
        name:'Мелек Юджель',
        sphere:'Подруга Эды',
        image:'https://allturkserials.com/wp-content/uploads/2020/10/eldzhin_afadzhan_01_2.jpg'
    },
    {
        id:4,
        name:'Фиген Йылдырым',
        sphere:'Подруга Эды',
        image:'https://avatars.mds.yandex.net/get-zen_doc/4776500/pub_60247087a06a2a6c7ab46f31_6024708f10b7775b566f8e07/scale_1200'
    },
    {
        id:5,
        name:'Джерен Башар',
        sphere:'Подруга Эды',
        image:'https://avatars.mds.yandex.net/get-zen_doc/4612968/pub_60904a3ca38d215d4e7f0514_60904aadde56f009bc4dcd37/scale_1200'
    },
    {
        id:6,
        name:'Айфер Йылдыз',
        sphere:'Тетя Эды',
        image:'https://www.dizidoktoru.com/images/upload/Evrim_DoYan.jpg'
    },
    {
        id:7,
        name:'Айдан Болат',
        sphere:'Мать Серкана',
        image:'https://www.dizidoktoru.com/images/upload/Neslihan_Yeldan.jpg'
    },
    {
        id:8,
        name:'Альптекин Болат',
        sphere:'Отец Серкана',
        image:'https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/198236/aiqpCiXSXdAp4OoLdyXA.jpg'
    },
    {
        id:9,
        name:'Энгин Сезгин',
        sphere:'Коллега Серкана',
        image:'https://kinoturkey.ru/uploads/posts/2020-07//1594146707_wyzld-_jvl8.jpg'
    },
    {
        id:10,
        name:'Селин Атакан',
        sphere:'Коллега Серкана',
        image:'https://c.radikal.ru/c13/2012/76/9385e45864d1.jpg'
    },
    {
        id:11,
        name:'Пырыл Байтекен',
        sphere:'Коллега Серкана',
        image:'https://muzolenta.ru/wp-content/uploads/2020/09/bashak.jpg'
    },
    {
        id:12,
        name:'Эрдем Сангай',
        sphere:'Коллега Серкана',
        image:'https://biyografi.site/uploads/sen-cal-kapimi-dizisi-erdem-sarp-bozkurt-kac-yilinda-dogmustur.jpg'
    }
]

const container = document.querySelector('.row')

window.addEventListener('load' , () =>{
    if(!localStorage.getItem('heroes')){
        localStorage.setItem('heroes' , JSON.stringify(database))
    }else{
        const base = JSON.parse(localStorage.getItem('heroes'))

        const newBaseWithID = base.map((item , index) =>{
            return{...item, id:index}
        })

        localStorage.setItem('heroes', JSON.stringify([...newBaseWithID]))

        const newBase = JSON.parse(localStorage.getItem('heroes'))
        console.log(newBase);

        RenderCard(newBase)
    }
})

function RenderCard(base){
    const Card = base.map(({name, sphere, image}) =>{
        return `
            <div class="card w-25">
                <div class="card-header">
                    <h4>${name}</h4>
                </div>

                <div class="card-image">
                    <img src=${image}>
                </div>

                <div class="card-body">
                    <p>Sphere: ${sphere}</p>
                </div>
            </div>
        `
    }).join('')

    container.innerHTML = Card
}

const searchName = document.querySelector('.searchName')
const searchSphere = document.querySelector('.searchSphere')

searchName.addEventListener('input' , e =>{
    var value = e.target.value.toUpperCase()

    const filtered = databse.filter(({name}) => name.toUpperCase().includes(value))

    RenderCard(filtered)
})

searchSphere.addEventListener('input' , e =>{
    var value = e.target.value.toUpperCase()

    const filtered = database.filter(({sphere}) => sphere.toUpperCase().includes(value))

    RenderCard(filtered)
})

const signout = document.querySelector('.signout')

window.addEventListener('load' , () =>{
    if(localStorage.getItem('isAuth') === 'false' ){
        window.open('../auth.html' , '_self')
    }else{
        return
    }
})

signout.addEventListener('click' , e =>{
    e.preventDefault();

    localStorage.setItem('isAuth' , 'false')
    window.open('../auth.html' , '_self')
})
